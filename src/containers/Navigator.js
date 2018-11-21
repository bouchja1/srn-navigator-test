import { createStackNavigator } from "react-navigation"
import RootContainer from "./RootContainer"
import DetailContainer from "./Detail"
import TabNavigator from "./TabNavigator"

const HomeNavigator = createStackNavigator({
  Home: RootContainer,
  Detail: DetailContainer,
})

const BeersNavigator = createStackNavigator({
  Home: RootContainer,
  Detail: DetailContainer,
})

const ContactNavigator = createStackNavigator({
  Home: RootContainer,
  Detail: DetailContainer,
})

export default TabNavigator.createAppContainer(
  HomeNavigator,
  BeersNavigator,
  ContactNavigator,
)
