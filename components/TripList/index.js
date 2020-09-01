import React from "react";
import { List, Content, Spinner } from "native-base";
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

//components
import TripItem from "../../components/TripList/TripItem";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  console.log("tripList ", tripStore.trips);
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{tripList}</List>
      {/* <Right>
        <CreateButton />
      </Right> */}
    </Content>
  );
};
export default observer(TripList);
