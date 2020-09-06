import React from "react";
import { observer } from "mobx-react";
import { Image } from "react-native";
import test from "../../test.jpg";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";
import { DiscoverTextStyled } from "./styles";

//stores
import tripStore from "../../stores/tripStore";

const DiscoverItem = ({ trip, navigation }) => {
  if (tripStore.loading) return <Spinner />;

  return (
    <Card onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <CardItem>
        <Left>
          <Thumbnail />
          <DiscoverTextStyled
            onPress={() => navigation.navigate("UserProfile", { trip: trip })}
          >
            {trip.user.username}
          </DiscoverTextStyled>
          <Body>
            <Text>{trip.title}</Text>
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
