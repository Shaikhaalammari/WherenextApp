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
import { Backgroundcolor } from "../MyTripList/styles";

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
      <Backgroundcolor>
        <Card>
          <CardItem style={{ backgroundColor: "#FBF9F3" }} cardBody>
            <ProfileSignoutBtn
              onPress={handleSignout}
              type="SimpleLineIcons"
              name="logout"
              color="#f09ae9"
            ></ProfileSignoutBtn>
            <Right>{/* <CreateButton /> */}</Right>
          </CardItem>
          <CardItem style={{ backgroundColor: "#FBF9F3" }}>
            <Left>
              <UpdateProfileButton profile={authStore.user} />

              <Thumbnail
                large
                source={profile.image ? { uri: profile.image } : test2}
                style={{ marginLeft: -77, marginBottom: -25 }}
              />
            </Left>
            <Right>
              <UsernameStyled>{authStore.user.username}</UsernameStyled>
              <CardItem style={{ backgroundColor: "#FBF9F3" }}>
                <BioStyled>{profile.bio}</BioStyled>
              </CardItem>
            </Right>
          </CardItem>
        </Card>
        <MyTripList owner={owner} />
      </Backgroundcolor>
    </>
  );
};

export default observer(ProfileDetail);
