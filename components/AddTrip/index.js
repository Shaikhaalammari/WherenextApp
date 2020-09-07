import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Button, Image, View, Platform } from "react-native";

// Styles
import {
  TripContainer,
  TripTitle,
  TripTextInput,
  AddButton,
  AddButtonText,
  AddImageBtnStyled,
  AddImageText,
} from "./styles";
import { Row } from "native-base";

// Stores
import tripStore from "../../stores/tripStore";

const AddTrip = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    // date: "",
    detail: "",
    image: "",
  });

  const handleSubmit = async () => {
    // console.log("inside handle submit", trip);
    await tripStore.addTrip(trip);
    navigation.goBack();
  };

  //////IMAGE PICKER/////////

  const [image, setImage] = useState();

  getPermissionAsync = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  useEffect(() => {
    getPermissionAsync();
  });

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage({ image: result.uri });

        // ImagePicker saves the taken photo to disk and returns a local URI to it
        let localUri = result.uri;
        let filename = localUri.split("/").pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        setTrip({ ...trip, image: { uri: localUri, name: filename, type } });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <TripContainer>
      <TripTitle>Add New Trip</TripTitle>
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, title: value })}
        placeholder="Title"
        placeholderTextColor="#99b898"
      />
      {/* <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, date: value })}
        placeholder="Date"
        placeholderTextColor="#99b898"
      /> */}
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, detail: value })}
        placeholder="Detail"
        placeholderTextColor="#99b898"
      />
      {/* <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, image: value })}
        placeholder="Image"
        placeholderTextColor="#99b898"
      /> */}

      <Row>
        <AddImageText>Add an image</AddImageText>
        <AddImageBtnStyled
          title="Pick an image from camera roll"
          onPress={_pickImage}
          type="Ionicons"
          name="image"
        />
        {image && (
          <Image
            source={{ uri: image.image }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </Row>

      <AddButton onPress={handleSubmit}>
        <AddButtonText>Add Trip</AddButtonText>
      </AddButton>
    </TripContainer>
  );
};

export default observer(AddTrip);
