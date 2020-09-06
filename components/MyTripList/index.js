import React from "react";
import { List, Content, Spinner } from "native-base";
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
//components
import MyTripItem from "../MyTripList/MyTripItem";

const MyTripList = ({ navigation }) => {
  const userList = tripStore.trips
    .filter((trip) => authStore.user.id === trip.userId)
    .map((trip) => (
      <MyTripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Content>
      <List>{userList}</List>
    </Content>
  );
};
export default observer(MyTripList);
