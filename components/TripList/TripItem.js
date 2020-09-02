import React from "react";
import { observer } from "mobx-react";

//styles
import { TripItemStyled, TripTextStyled } from "./styles";

import { Thumbnail, Right } from "native-base";

import test from "../../test.jpg";
import DeleteButton from "../buttons/DeleteButton";

// Buttons
import UpdateButton from "../buttons/UpdateButton";

const TripItem = ({ trip, navigation }) => {
  // if (tripStore.loading) return <Spinner />;
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

      <Right>
        <UpdateButton trip={trip} />
        <DeleteButton tripId={trip.id} />
      </Right>
    </TripItemStyled>
  );
};

export default observer(TripItem);
