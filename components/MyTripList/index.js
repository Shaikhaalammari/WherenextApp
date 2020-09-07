import React from "react";
import { List, Content, Spinner, Right } from "native-base";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
//components
import MyTripItem from "../MyTripList/MyTripItem";
import CreateButton from "../buttons/CreateButton";

const MyTripList = ({ owner, profile, trip }) => {
  const navigation = useNavigation();
  const userList = owner
    ? tripStore.trips
        .filter((trip) => authStore.user.id === trip.userId)
        .map((trip) => (
          <MyTripItem trip={trip} key={trip.id} navigation={navigation} />
        ))
    : tripStore.trips
        .filter((storeTrip) => storeTrip.userId === trip.userId)
        .map((trip) => (
          <MyTripItem trip={trip} key={trip.id} navigation={navigation} />
        ));

  return (
    <Content>
      <Right>
        <CreateButton />
      </Right>
      <List>{userList}</List>
    </Content>
  );
};
export default observer(MyTripList);
