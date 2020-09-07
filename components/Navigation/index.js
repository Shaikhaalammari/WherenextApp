import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileNavigation from "./ProfileNavigation";
import TripNavigation from "./TripNavigation";

//Components
import TripDetail from "../TripDetail";
import DiscoverList from "../DiscoverList";
import Home from "../Home";

// STYLES
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#FF8033"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={TripNavigation}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="earth" color={"#FF8033"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account"
              color={"#FF8033"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
