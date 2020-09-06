import React from "react";
import { observer } from "mobx-react";

//styles
import { TripItemStyled, TripTextStyled } from "./styles";
import { Thumbnail, Right } from "native-base";
//Data
import test from "../../test.jpg";

// Buttons
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";
//Store
import authStore from "../../stores/authStore";
import { TouchableHighlight } from "react-native-gesture-handler";

const TripItem = ({ trip, navigation }) => {
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
      <TripTextStyled onPress={() => navigation.navigate("UserProfile")}>
        {trip.user.username}
      </TripTextStyled>
      <UpdateButton trip={trip} />
      <DeleteButton tripId={trip.id} />
    </TripItemStyled>
  );
};

export default observer(TripItem);
