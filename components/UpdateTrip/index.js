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
  UpdateButton,
  UpdateButtonText,
  AddImageBtnStyled,
  AddImageText,
} from "./styles";
import { Row } from "native-base";

// Stores
import tripStore from "../../stores/tripStore";

const UpdateTrip = ({ navigation, route }) => {
  const { oldTrip } = route.params;
  console.log("updatedTrip", route.params);

  const [trip, setTrip] = useState(
    oldTrip ?? {
      title: "",
      image: "",
      detail: "",
      // location: "",
    }
  );

  const handleUpdate = async () => {
    await tripStore.updateTrip(trip);
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
      <TripTitle>Update Trip</TripTitle>
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, title: value })}
        placeholder="Title"
        placeholderTextColor="#c3f7eb"
        value={trip.title}
      />
      <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, detail: value })}
        placeholder="Detail"
        placeholderTextColor="#c3f7eb"
      />
      {/* <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, image: value })}
        placeholder="Image"
        placeholderTextColor="#99b898"
        value={trip.image}
      /> */}
      {/* <TripTextInput
        onChangeText={(value) => setTrip({ ...trip, location: value })}
        placeholder="Location"
        placeholderTextColor="#99b898"
      /> */}

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

      <UpdateButton onPress={handleUpdate}>
        <UpdateButtonText>Update Trip</UpdateButtonText>
      </UpdateButton>
    </TripContainer>
  );
};

export default observer(UpdateTrip);
