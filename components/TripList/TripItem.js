import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import tripStore from "../../stores/tripStore";

const TripItem = ({ trip }) => {
  if (tripStore.loading) return <Spinner />;
  return <Text>{trip.title}</Text>;
};

export default observer(TripItem);
