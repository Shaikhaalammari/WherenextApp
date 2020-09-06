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

const TripDetail = ({ navigation, route }) => {
  if (tripStore.loading) return <Spinner />;
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
            {trip.date}
          </BottomStyling>
        </DetailTextStyled>
      </TripDetailStyled>

      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </>
  );
};

export default observer(TripDetail);
