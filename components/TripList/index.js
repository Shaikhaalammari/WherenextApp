import React from "react";
import { List, Content, Spinner } from "native-base";
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

//components
import TripItem from "../../components/TripList/TripItem";
import CreateButton from "../buttons/CreateButton";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  // console.log("tripList ", tripStore.trips);
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <CreateButton />
      <List>{tripList}</List>
    </Content>
  );
};
export default observer(TripList);
