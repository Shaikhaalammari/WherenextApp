import React from "react";
import { observer } from "mobx-react";
//stors
import tripStore from "../../stores/tripStore";
//styles
import { TrashIcon } from "./styles";

const DeleteButton = ({ tripId, navigation }) => {
  const handleDelete = () => {
    tripStore.tripDelete(tripId);
    if (tripStore.tripId) navigation.navigate("Trips");
  };
  return <TrashIcon name="trash" type="Ionicons" onPress={handleDelete} />;
};

export default observer(DeleteButton);
