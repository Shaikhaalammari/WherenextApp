import React from "react";
import { observer } from "mobx-react";
// import MapView from "react-native-maps";
import {
  TripDetailStyled,
  DetailTextStyled,
  BottomStyling,
  TopStyling,
} from "./styles";
import tripStore from "../../stores/tripStore";

import { Thumbnail, Text } from "native-base";
import test from "../../test.jpg";

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
                height: 100,
                width: 200,
              }}
              source={trip.image ? { uri: trip.image } : test}
            />
          </TopStyling>
          <BottomStyling>
            {trip.title}
            {trip.detail}
          </BottomStyling>
        </DetailTextStyled>
      </TripDetailStyled>
    </>
  );
};

export default observer(TripDetail);
