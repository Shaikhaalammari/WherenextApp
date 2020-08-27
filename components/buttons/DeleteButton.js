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
    <div>
      <Button title="Delete the Trip" onPress={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
