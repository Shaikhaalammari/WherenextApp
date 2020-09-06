import React from "react";
import { observer } from "mobx-react";
import { Container, Content, List } from "native-base";

//component
import DiscoverItem from "./DiscoverItem";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

const DiscoverList = ({ navigation }) => {
  const discoverList = authStore.user
    ? tripStore.trips
        .filter((trip) => authStore.user.id !== trip.userId)
        .map((trip) => (
          <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
        ))
    : tripStore.trips.map((trip) => (
        <DiscoverItem trip={trip} key={trip.id} navigation={navigation} />
      ));
  return (
    <Container>
      <Content>
        <List>{discoverList}</List>
      </Content>
    </Container>
  );
};

export default observer(DiscoverList);
