import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react"
import RootContainer from "./RootContainer"
import BeersContainer from "./Beers"
import ContactContainer from "./Contact"

/**
 * https://reactnavigation.org/docs/en/tab-based-navigation.html
 */
const TabNavigator = createBottomTabNavigator(
  {
    Home: RootContainer,
    Beers: BeersContainer,
    Contact: ContactContainer,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`
        } else if (routeName === "Beers") {
          iconName = `ios-beer${focused ? "" : "-outline"}`
        } else if (routeName === "Contact") {
          iconName = `ios-contact${focused ? "" : "-outline"}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  },
)

export default createAppContainer(TabNavigator)
