import React from "react";
import { observer } from "mobx-react";
import { Thumbnail, CardItem } from "native-base";
import {
  ProfileItemStyles,
  ProfileTextStyles,
  ProfileSignoutBtn,
} from "./styles";
import authStore from "../../stores/authStore";
import { Alert } from "react-native";

const ProfileItem = ({ profile }) => {
  const handleSignout = () => {
    authStore.signout;
    Alert.alert("You have Signed Out");
  };
  return (
    <ProfileItemStyles>
      <ProfileTextStyles>{profile.bio}</ProfileTextStyles>
      <Thumbnail square large source={{ uri: profile.image }} />
      <ProfileSignoutBtn
        onPress={handleSignout}
        type="SimpleLineIcons"
        name="logout"
        color="#f09ae9"
      ></ProfileSignoutBtn>
    </ProfileItemStyles>
  );
};

export default observer(ProfileItem);
