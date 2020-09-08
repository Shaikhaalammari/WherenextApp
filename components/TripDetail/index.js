import React from "react";
import { observer } from "mobx-react";
import { Thumbnail, Text, Row } from "native-base";
// import MapView from "react-native-maps";

//styles
import {
  TripDetailStyled,
  DetailTextStyled,
  BottomStyling,
  TopStyling,
} from "./styles";
//the image
import test from "../../test.jpg";

//stores
import authStore from "../../stores/authStore";

// Buttons
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  //not sure ^^
  return (
    <>
      <TripDetailStyled>
        <Thumbnail
          style={{
            marginTop: 40,
            marginLeft: 10,
            height: 200,
            width: 400,
          }}
          source={trip.image ? { uri: trip.image } : test}
        />
        <DetailTextStyled>
          <BottomStyling>{trip.detail}</BottomStyling>
          {authStore.user && authStore.user.id === trip.userId ? (
            <>
              <UpdateButton trip={trip} />
              <DeleteButton tripId={trip.id} />
            </>
          ) : (
            <Text></Text>
          )}
        </DetailTextStyled>
      </TripDetailStyled>
    </>
  );
};

export default observer(TripDetail);
