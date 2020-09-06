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
import tripStore from "../../stores/tripStore";

const ProfileDetail = ({ navigation }) => {
  const userList = tripStore.trips.filter(
    (trip) => authStore.user.id === trip.userId
  );

  const handleSignout = async () => {
    await authStore.signout();
    navigation.replace("Signin");

    Alert.alert("You have Signed Out");
  };

  //how to render the list in profile by the username
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            large
            source={
              authStore.user.image ? { uri: authStore.user.image } : test2
            }
          />
        </Left>
        <Right>
          <Text>{authStore.user.username}</Text>
          <Text>{authStore.user.bio}</Text>
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
  );
};

export default observer(ProfileDetail);
