import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Restaurants from "../screens/Restaunrants"
import Favorites from "../screens/Favorites"
import TopRestarants from "../screens/TopRestaurants"
import Search from "../screens/Search"
import Account from "../screens/Account"


const Tab = createBottomTabNavigator()

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="restaurants" 
                    component={Restaurants} 
                    options={{title: "Restaurants"}} 
                 />
                <Tab.Screen
                     name="Favorites"
                    component={Favorites} 
                     options={{title: "Favorites"}}
                 />
                 <Tab.Screen 
                    name="top-restaurants" 
                    component={TopRestarants} 
                    options={{title: "Top 5"}} 
                 />
                 <Tab.Screen 
                    name="search" 
                    component={Search} 
                    options={{title: "Search"}} 
                 />
                 <Tab.Screen 
                    name="account" 
                    component={Account} 
                    options={{title: "Account"}} 
                 />
            </Tab.Navigator>
        </NavigationContainer>
    )
}