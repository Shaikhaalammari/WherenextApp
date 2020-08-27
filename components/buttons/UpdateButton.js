import React from "react";
import { Button, Alert } from "react-native";

const UpdateButton = () => {
  return (
    <div>
      <Button
        title="Update"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </div>
  );
};

export default UpdateButton;
