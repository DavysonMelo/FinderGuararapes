import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "./Home";
import Detail from "./Details";

function InfoStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f5f5f5",
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
        },
        headerTitleStyle: {
          display: "none",
        },
      }}
    >
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Detail}
        name="Detail"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default InfoStack;
