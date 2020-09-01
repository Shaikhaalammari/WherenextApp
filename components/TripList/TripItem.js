import React from "react";
import { observer } from "mobx-react";

//styles
import { TripItemStyled, TripTextStyled } from "./styles";
import { Thumbnail, Right } from "native-base";
import test from "../../test.jpg";

// Buttons
import UpdateButton from "../buttons/UpdateButton";

const TripItem = ({ trip }) => {
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
      <Right>
        <UpdateButton trip={trip} />
      </Right>
    </TripItemStyled>
  );
};

export default observer(TripItem);
