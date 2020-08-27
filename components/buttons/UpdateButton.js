import React from "react";
import { Button, Alert } from "react-native";

const UpdateButton = () => {
  return (
    <Button
      title="Update"
      onPress={() => Alert.alert("Simple Button pressed")}
    />
  );
};

export default UpdateButton;
