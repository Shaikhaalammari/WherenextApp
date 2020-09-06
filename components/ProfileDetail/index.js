import React from "react";
import { observer } from "mobx-react";
import {
  ProfileItemStyles,
  ProfileTextStyles,
  ProfileSignoutBtn,
} from "./styles";
import authStore from "../../stores/authStore";
import UpdateProfileButton from "../buttons/UpdateProfileButton";
import { Alert } from "react-native";
import test2 from "../../test2.png";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  List,
  Right,
  Content,
} from "native-base";
import profileStore from "../../stores/profileStore";
import MyTripList from "../MyTripList";

const ProfileDetail = ({ navigation }) => {
  const profile = profileStore.profiles.find(
    (profile) => authStore.user.id === profile.userId
  );

  const handleSignout = async () => {
    await authStore.signout();
    navigation.replace("Signin");

    Alert.alert("You have Signed Out");
  };

  return (
    <>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              large
              source={profile.image ? { uri: profile.image } : test2}
            />
          </Left>
          <Right>
            <Text>{authStore.user.username}</Text>
            <Text>{profile.bio}</Text>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <ProfileSignoutBtn
            onPress={handleSignout}
            type="SimpleLineIcons"
            name="logout"
            color="#f09ae9"
          ></ProfileSignoutBtn>
          <UpdateProfileButton profile={authStore.user} />
        </CardItem>
      </Card>
      <MyTripList />
    </>
  );
};

export default observer(ProfileDetail);
