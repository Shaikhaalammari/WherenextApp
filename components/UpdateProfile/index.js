import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Image, Platform } from "react-native";

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
import profileStore from "../../stores/profileStore";

const UpdateProfile = ({ navigation, route }) => {
  const { oldProfile } = route.params;
  console.log(route.params);

  const [profile, setProfile] = useState(
    oldProfile ?? {
      bio: "",
      image: "",
    }
  );

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

        setProfile({
          ...profile,
          image: { uri: localUri, name: filename, type },
        });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const handleUpdate = async () => {
    await profileStore.updateProfile(profile);
    navigation.goBack();
  };

  return (
    <TripContainer>
      <TripTitle>Update Profile</TripTitle>
      <TripTextInput
        onChangeText={(value) => setProfile({ ...profile, bio: value })}
        placeholder="bio"
        placeholderTextColor="#c3f7eb"
        value={profile.bio}
      />
      {/* <TripTextInput
        onChangeText={(value) => setProfile({ ...profile, image: value })}
        placeholder="Image"
        placeholderTextColor="#99b898"
        value={profile.image}
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
        <UpdateButtonText>Edit profile</UpdateButtonText>
      </UpdateButton>
    </TripContainer>
  );
};

export default observer(UpdateProfile);

// render it inn profile item check the functionality
