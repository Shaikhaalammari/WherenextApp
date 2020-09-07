import React from "react";
import { observer } from "mobx-react";

//Styles
import {
  ProfileItemStyles,
  ProfileTextStyles,
  ProfileSignoutBtn,
  BioStyled,
  UsernameStyled,
} from "./styles";

// STORES
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";

// BUTTONS
import UpdateProfileButton from "../buttons/UpdateProfileButton";
import CreateButton from "../buttons/CreateButton";

// Components
import MyTripList from "../MyTripList";

import { Alert } from "react-native";
import test2 from "../../test2.png";
import { Card, CardItem, Thumbnail, Text, Left, Right } from "native-base";

const ProfileDetail = ({ navigation }) => {
  const profile = profileStore.profiles.find(
    (profile) => authStore.user.id === profile.userId
  );
  console.log(profile);
  const handleSignout = async () => {
    await authStore.signout();
    navigation.replace("Signin");
    Alert.alert("You have Signed Out");
  };
  console.log(authStore.user.id);

  const owner = true;

  return (
    <>
      <Card>
        <CardItem cardBody>
          <ProfileSignoutBtn
            onPress={handleSignout}
            type="SimpleLineIcons"
            name="logout"
            color="#f09ae9"
          ></ProfileSignoutBtn>
          <Right>
            <UpdateProfileButton profile={authStore.user} />
            {/* <CreateButton /> */}
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail
              large
              source={profile.image ? { uri: profile.image } : test2}
            />
          </Left>
          <Right>
            <UsernameStyled>{authStore.user.username}</UsernameStyled>
            <BioStyled>{profile.bio}</BioStyled>
          </Right>
        </CardItem>
      </Card>
      <MyTripList owner={owner} />
    </>
  );
};

export default observer(ProfileDetail);
