import React, { useReducer } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import AddTrip from "../AddTrip";
import UpdateTrip from "../UpdateTrip";
import TripDetail from "../TripDetail";
import UpdateProfile from "../UpdateProfile";
import ProfileDetail from "../ProfileDetail";

const { Navigator, Screen } = createStackNavigator();
const ProfileNavigation = () => {
  return (
    <Navigator initialRouteName="Singin">
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
        name="Profile"
        component={ProfileDetail}
        options={{ headerShown: false }}
      />
      <Screen
        name="TripDetail"
        component={TripDetail}
        options={{ headerShown: false }}
      />
      <Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default ProfileNavigation;
