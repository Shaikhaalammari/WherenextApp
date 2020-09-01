import React from "react";
import { Button } from "react-native";

const CreateButton = () => {
  return (
    // Since it's only a button remove the fragments <></>
    <>
      <Button title="Add New Trip" onPress={() => openModal} />
    </>
  );
};

export default CreateButton;
