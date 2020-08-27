import React from "react";
import { Button, Alert } from "react-native";

const CreateButton = () => {
  return (
    <div>
      <Button
        title="Add New Trip"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </div>
  );
};

export default CreateButton;
