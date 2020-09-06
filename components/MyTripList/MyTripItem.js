import React from "react";
import { observer } from "mobx-react";

//styles
import { MyTripItemStyled, MyTripTextStyled } from "./styles";
import { Thumbnail, Right } from "native-base";
//Data
import test from "../../test.jpg";

// Buttons
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

const MyTripItem = ({ trip, navigation }) => {
  //// WEEEE NEEEED A GOOD LOOKIN STYLING

  return (
    <MyTripItemStyled
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
      <MyTripTextStyled>{trip.title}</MyTripTextStyled>
      <UpdateButton trip={trip} />
      <DeleteButton tripId={trip.id} />
    </MyTripItemStyled>
  );
};

export default observer(MyTripItem);
