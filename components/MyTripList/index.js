import React from "react";
import { List, Content, Spinner, Right, Text } from "native-base";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
//components
import MyTripItem from "../MyTripList/MyTripItem";
import CreateButton from "../buttons/CreateButton";
import { ListItem } from "react-native-gesture-handler";
//styles
import { Backgroundcolor } from "./styles";

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
    <Backgroundcolor>
      <Content>
        <Right>{owner ? <CreateButton /> : <Text></Text>}</Right>
        <List>{userList}</List>
      </Content>
    </Backgroundcolor>
  );
};
export default observer(MyTripList);
