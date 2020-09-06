import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TripNavigator from "./TripNavigation";
import ProfileNavigation from "./ProfileNavigation";
import TripNavigation from "./TripNavigation";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TripNavigation" component={TripNavigation} />
      <Tab.Screen name="ProfileNavigation" component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

export default MyTabs;
