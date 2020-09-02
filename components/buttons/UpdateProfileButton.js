import React from "react";
import { observer } from "mobx-react";
//stors
import profileStore from "../../stores/profileStore";
import { UpdateButtonStyled } from "./styles";
import { useNavigation } from "@react-navigation/native";

const UpdateProfileButton = ({ profile }) => {
  const navigation = useNavigation();
  const handleEdit = () => {
    profileStore.updateProfile(userId);
    if (profileStore.userId) navigation.navigate("Home");
  };
  return (
    <UpdateButtonStyled
      onPress={() =>
        navigation.navigate("UpdateProfile", { oldProfile: profile })
      }
      type="MaterialCommunityIcons"
      name="update"
      color="#f09ae9"
    ></UpdateButtonStyled>
  );
};

export default observer(UpdateProfileButton);
