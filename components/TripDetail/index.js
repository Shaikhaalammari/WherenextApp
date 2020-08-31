import React from "react";
import { observer } from "mobx-react";
import { TripDetailStyled, DetailTextStyled } from "./styles";
import tripStore from "../../stores/tripStore";

import { Thumbnail, Text } from "native-base";

const TripDetail = ({ navigation, route }) => {
  if (tripStore.loading) return <Spinner />;
  const { trip } = route.params;

  //not sure ^^
  return (
    <TripDetailStyled>
      <DetailTextStyled>
        <Text>{trip.title}</Text>
        <Text>{trip.detail}</Text>
        <Thumbnail
          style={{
            resizeMode: "center",
            height: 100,
            width: 200,
          }}
          source={trip.image ? { uri: trip.image } : test}
        />
        {trip.date}
      </DetailTextStyled>
    </TripDetailStyled>
  );
};

export default observer(TripDetail);
