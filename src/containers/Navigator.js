import { createStackNavigator } from "react-navigation"
import RootContainer from "./RootContainer"
import DetailContainer from "./Detail"

export default createStackNavigator({
  Home: {
    screen: RootContainer,
  },
  Detail: {
    screen: DetailContainer,
  },
})
