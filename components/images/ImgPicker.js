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
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  ////////////////////////////////////////////////////////////////
  //   const [selectedImage, setSelectedImage] = useState(null);

  //   let openImagePickerAsync = async () => {
  //     let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  //     if (permissionResult.granted === false) {
  //       alert("Permission to access camera roll is required!");
  //       return;
  //     }

  //     let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //     console.log(pickerResult);
  //   };
  //   if (pickerResult.cancelled === true) {
  //     return;
  //   }

  //   setSelectedImage({ localUri: pickerResult.uri });
  // };

  // if (selectedImage !== null) {
  //   return (
  //     <View style={styles.container}>
  //       <Image
  //         source={{ uri: selectedImage.localUri }}
  //         style={styles.thumbnail}
  //       />
  //     </View>
  //   );
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
/* <View>
        <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} />
        <Text>
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>

        <TouchableOpacity onPress={openImagePickerAsync}>
          <Text>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    </> */

// const styles = StyleSheet.create({
/* Other styles hidden to keep the example brief... */
// thumbnail: {
//   width: 300,
//   height: 300,
//   resizeMode: "contain"
// } */}

export default ImgPicker;
