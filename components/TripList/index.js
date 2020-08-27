import React from "react";
import { List, Content, Spinner } from "native-base";
import { observer } from "mobx-react";

//stpres
import tripStore from "../../stores/tripStore";

//components
import TripItem from "../../components/TripList/TripItem";
import CreateButton from "../buttons/CreateButton";
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};
export default observer(TripList);
