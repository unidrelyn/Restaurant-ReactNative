import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestarants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestarantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurantes"
        component={TopRestarants}
        options={{ title: "TopRestarants" }}
      />
    </Stack.Navigator>
  );
}
