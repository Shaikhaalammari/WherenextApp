import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

//styles
import { TripItemStyled, TripTextStyled } from "./styles";
import { Image, Thumbnail } from "native-base";
import test from "../../test.jpg";

const TripItem = ({ trip }) => {
  if (tripStore.loading) return <Spinner />;
  return (
    <TripItemStyled>
      <Thumbnail
        style={{
          resizeMode: "center",
          height: 100,
          width: 200,
        }}
        source={trip.image ? { uri: trip.image } : test}
      />
      <TripTextStyled>{trip.title}</TripTextStyled>
    </TripItemStyled>
  );
};

export default observer(TripItem);
