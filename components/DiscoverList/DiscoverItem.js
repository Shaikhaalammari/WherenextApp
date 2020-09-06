import React from "react";
import { observer } from "mobx-react";
import { Image } from "react-native";
import test from "../../test.jpg";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";

//stores
import tripStore from "../../stores/tripStore";

const DiscoverItem = ({ trip, navigation }) => {
  if (tripStore.loading) return <Spinner />;

  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail />
          <Body>
            <Text
              onPress={() => navigation.navigate("TripDetail", { trip: trip })}
            >
              {trip.title}
            </Text>
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
