import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import ProfileList from "../ProfileList";
import TripList from "../TripList";
import TripDetail from "../TripDetail";
import Signin from "../../authentication/Signin";
import Signup from "../../authentication/Signup";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Trips"
        component={TripList}
        options={{ title: "Choose a Trip" }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{ headerShown: false }}
      />
      <Screen
        name="Profile"
        component={ProfileList}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
export default RootNavigator;
