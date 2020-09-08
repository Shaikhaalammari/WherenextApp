import React from "react";
import { observer } from "mobx-react";
import { Image } from "react-native";
import test from "../../test.jpg";
import test2 from "../../test2.png";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";
import { DiscoverTextStyled, DiscoverTripTitle } from "./styles";

//stores
import tripStore from "../../stores/tripStore";

const DiscoverItem = ({ trip, navigation, profile }) => {
  return (
    <Card>
      <CardItem style={{ backgroundColor: "#FBF9F3" }}>
        <Left>
          <Thumbnail
            large
            source={
              trip.user.username.image
                ? { uri: trip.user.username.image }
                : test2
            }
          />
          <DiscoverTextStyled
            onPress={() => navigation.navigate("UserProfile", { trip: trip })}
          >
            {trip.user.username}
          </DiscoverTextStyled>
          <Body>
            <DiscoverTripTitle
              onPress={() => navigation.navigate("TripDetail", { trip: trip })}
            >
              {trip.title}
            </DiscoverTripTitle>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={trip.image ? { uri: trip.image } : test}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
    </Card>
  );
};

export default observer(DiscoverItem);
