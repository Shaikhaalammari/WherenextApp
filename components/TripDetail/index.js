import React from "react";
import { observer } from "mobx-react";
import { Thumbnail } from "native-base";
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

// Buttons
import UpdateButton from "../buttons/UpdateButton";
import DeleteButton from "../buttons/DeleteButton";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  //not sure ^^
  return (
    <>
      <TripDetailStyled>
        <DetailTextStyled>
          <TopStyling>
            <Thumbnail
              style={{
                resizeMode: "center",
                height: 200,
                width: 500,
              }}
              source={trip.image ? { uri: trip.image } : test}
            />
          </TopStyling>
          <BottomStyling>{trip.detail}</BottomStyling>
          <UpdateButton trip={trip} />
          <DeleteButton tripId={trip.id} />
        </DetailTextStyled>
      </TripDetailStyled>
    </>
  );
};

export default observer(TripDetail);
