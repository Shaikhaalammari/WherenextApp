import React from "react";
import { observer } from "mobx-react";
//stors
import profileStore from "../../stores/profileStore";
import { EditProfileStyled } from "./styles";
import { useNavigation } from "@react-navigation/native";

const UpdateProfileButton = ({ profile }) => {
  const navigation = useNavigation();
  const handleEdit = () => {
    profileStore.updateProfile(userId);
    if (profileStore.userId) navigation.navigate("Home");
  };
  return (
    <EditProfileStyled
      onPress={() =>
        navigation.navigate("UpdateProfile", { oldProfile: profile })
      }
    >
      Edit Profile
    </EditProfileStyled>
  );
};

export default observer(UpdateProfileButton);
