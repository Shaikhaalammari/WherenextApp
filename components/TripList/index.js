import React from "react";
import { List, Content } from "native-base";
import { observer } from "mobx-react";

//stpres
import { tripStore } from "../../stores/tripStore";

//components
import TripItem from "../../components/TripList/TripItem";
import CreateButton from "../buttons/CreateButton";
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

const tripList = ({ navigation }) => {
  if (tripStore.loading) return <Text>Loading</Text>;
  tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <CreateButton />
      <DeleteButton />
      <UpdateButton />
      <List>{tripList}</List>
    </Content>
  );
};
export default observer(tripList);
