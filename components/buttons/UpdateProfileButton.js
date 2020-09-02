import React from "react";
import { observer } from "mobx-react";
//stors
import profileStore from "../../stores/profileStore";

const UpdateProfileButton = ({ navigation }) => {
  const handleEdit = () => {
    profileStore.updateProfile(userId);
    if (profileStore.userId) navigation.navigate("Home");
  };
  return <TrashIcon name="trash" type="Ionicons" onPress={handleEdit} />;
};

export default observer(UpdateProfileButton);
