import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

//styles
import { TripItemStyled } from "./styles";
import { Image, Thumbnail } from "native-base";
import test from "../../test.jpg";

const TripItem = ({ trip }) => {
  if (tripStore.loading) return <Spinner />;
  return (
    <TripItemStyled>
      {trip.title}
      <Thumbnail source={trip.image ? { uri: trip.image } : test} />
    </TripItemStyled>
  );
};

export default observer(TripItem);
