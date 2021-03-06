import React, { useReducer } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import TripList from "../TripList";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import AddTrip from "../AddTrip";
import UpdateTrip from "../UpdateTrip";
import TripDetail from "../TripDetail";
import DiscoverList from "../DiscoverList";
import UpdateProfile from "../UpdateProfile";
import ProfileDetail from "../ProfileDetail";
import UserProfile from "../UserProfile";

const { Navigator, Screen } = createStackNavigator();
const TripNavigation = () => {
  return (
    <Navigator initialRouteName="Discover">
      <Screen
        name="Trips"
        component={TripList}
        options={{ title: "Choose a Trip" }}
      />
      <Screen
        name="Discover"
        component={DiscoverList}
        options={{ title: "Choose a Trip" }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{ headerShown: false }}
      />
      <Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Screen name="Updatetrip" component={UpdateTrip} />
    </Navigator>
  );
};
export default TripNavigation;
