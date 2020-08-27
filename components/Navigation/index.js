import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import TripList from "../TripList";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen
        name="Trips"
        component={TripList}
        options={{ title: "Choose a Trip" }}
      />
    </Navigator>
  );
};
export default RootNavigator;
