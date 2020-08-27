import React from "react";
import { Button, Alert } from "react-native";

const CreateButton = () => {
  return (
    <Button
      title="Add New Trip"
      onPress={() => Alert.alert("Simple Button pressed")}
    />
  );
};

export default CreateButton;
