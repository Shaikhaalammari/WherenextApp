import React from "react";
import { observer } from "mobx-react";
import { Text, Thumbnail } from "react-native";
import { ProfileItemStyles, ProfileTextStyles } from "./styles";
import test from "../../test.jpg";
import { Image } from "native-base";

const ProfileItem = ({ profile }) => {
  return (
    <ProfileItemStyles>
      <ProfileTextStyles>{profile.bio}</ProfileTextStyles>
    </ProfileItemStyles> //couldnt render image !!! i hate styling
  );
};

export default observer(ProfileItem);
