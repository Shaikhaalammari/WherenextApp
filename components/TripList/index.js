import React from "react";
import { observer } from "mobx-react";
import { List } from "native-base";

const TripList = () => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} />
  ));

  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
