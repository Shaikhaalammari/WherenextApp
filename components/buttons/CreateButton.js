import React from "react";
import { Button } from "react-native";

const CreateButton = () => {
  return (
    <>
      <Button title="Add New Trip" onPress={() => openModal} />
    </>
  );
};

export default CreateButton;
