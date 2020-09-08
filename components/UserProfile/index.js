import React from "react";
import { observer } from "mobx-react";
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
import MyTripItem from "../MyTripList/MyTripItem";
import { UserName } from "./styles";

//WORKED
const UserProfile = ({ navigation, route }) => {
  const { trip } = route.params;
  const profile = profileStore.profiles.find(
    (profile) => trip.userId === profile.userId
  );

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
            <UserName>{trip.user.username}</UserName>
            <Text>{profile.bio}</Text>
          </Right>
        </CardItem>
      </Card>
      <MyTripList profile={profile} trip={trip} />
    </>
  );
};

export default observer(UserProfile);
