import React, { Component, Profiler } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

//stores
import tripStore from "../../stores/tripStore";

// export default class CardImageExample extends Component {

    const DiscoverList = ({ navigation }) => {
        if (tripStore.loading) return <Spinner />;
      
        console.log("discoverList ", tripStore.trips);
        const discoverList = tripStore.trips.map((trip) => (
          <DescoverItem trip={trip} key={trip.id} navigation={navigation} />
        ));
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "Image URL" }} />
                <Body>
                  <Text>{trips.title}</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: "Image URL" }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default observer(DiscoverList);