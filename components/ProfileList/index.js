import React from "react";
import { observer } from "mobx-react";
import { View, Spinner } from "native-base";
import profileStore from "../../stores/profileStore";
import ProfileItem from "./ProfileItem";
import authStore from "../../stores/authStore";

const ProfileList = ({ navigation }) => {
  // if (!authStore.user) navigation.navigate("Home"); //after Signout navigate home
  if (profileStore.loading) return <Spinner />;
  const profileList = profileStore.profiles.map((profile) => (
    <ProfileItem profile={profile} key={profile.id} navigation={navigation} />
  ));
  return <View>{profileList}</View>;
};

export default observer(ProfileList);

//bottom nave
