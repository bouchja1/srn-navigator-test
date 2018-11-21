import { createStackNavigator } from "react-navigation"
import RootContainer from "./RootContainer"
import DetailContainer from "./Detail"
import BeersContainer from "./Beers"
import BeerDetailContainer from "./BeerDetail"
import ContactContainer from "./Contact"
import TabNavigator from "./TabNavigator"

const HomeNavigator = createStackNavigator({
  Home: RootContainer,
  Detail: DetailContainer,
})

const BeersNavigator = createStackNavigator({
  Beers: BeersContainer,
  BeerDetail: BeerDetailContainer,
})

const ContactNavigator = createStackNavigator({
  Contact: ContactContainer,
})

export default TabNavigator.createAppContainer(
  HomeNavigator,
  BeersNavigator,
  ContactNavigator,
)
