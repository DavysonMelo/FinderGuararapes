import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Register from "../pages/Resgister";

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
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
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
