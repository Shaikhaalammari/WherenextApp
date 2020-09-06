import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

//Styles
import { ImgButton, ImgButtonText } from "./styles";

const ImgPicker = () => {
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
        setTrip({ ...trip, image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  console.log("image", image);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={_pickImage} />
      {/* <ImgButton title="Pick an image from camera roll" onPress={_pickImage}>
        <ImgButtonText>Add Image</ImgButtonText>
      </ImgButton> */}
      {image && (
        <Image
          source={{ uri: image.image }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
};

export default ImgPicker;
