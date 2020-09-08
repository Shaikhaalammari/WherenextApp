import React from "react";
import { observer } from "mobx-react";
import { Image } from "react-native";
import test from "../../test.jpg";
import test2 from "../../test2.png";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";
import { DiscoverTextStyled } from "./styles";

const DiscoverItem = ({ trip, navigation }) => {
  return (
    <Card>
      <CardItem>
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
