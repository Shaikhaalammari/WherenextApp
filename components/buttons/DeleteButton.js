import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-native";

const DeleteButton = () => {
  const history = useHistory();

  const handleDelete = () => {
    courseStore.deleteCourse(tripId);
    history.push("/trips");
  };
  return (
    <Button title="Delete the Trip" onPress={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteButton;
