import React from "react";
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

//styles
import { TripItemStyled, TripTextStyled } from "./styles";
import { Thumbnail } from "native-base";
import test from "../../test.jpg";
import DeleteButton from "../buttons/DeleteButton";

const TripItem = ({ trip, navigation }) => {
  if (tripStore.loading) return <Spinner />;
  //// WEEEE NEEEED A GOOD LOOKIN STYLING
  return (
    <TripItemStyled
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Thumbnail
        style={{
          resizeMode: "center",
          height: 100,
          width: 200,
        }}
        source={trip.image ? { uri: trip.image } : test}
      />
      <TripTextStyled>{trip.title}</TripTextStyled>

      <DeleteButton tripId={trip.id} />
    </TripItemStyled>
  );
};

export default observer(TripItem);
