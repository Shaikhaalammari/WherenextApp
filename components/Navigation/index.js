import React, { useReducer } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import ProfileList from "../ProfileDetail";
import TripList from "../TripList";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import AddTrip from "../AddTrip";
import UpdateTrip from "../UpdateTrip";
import TripDetail from "../TripDetail";
import DiscoverList from "../DiscoverList";
import UpdateProfile from "../UpdateProfile";
import ProfileDetail from "../ProfileDetail";

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
        name="Discovers"
        component={DiscoverList}
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
        name="Addtrip"
        component={AddTrip}
        options={{ headerShown: false }}
      />
      <Screen name="Updatetrip" component={UpdateTrip} />

      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{ headerShown: false }}
      />
      <Screen
        name="Profile"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />
      {/* <Screen
        name="UserProfile"
        component={userProfile}
        options={{ headerShown: false }}
      /> */}
      <Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
export default RootNavigator;
