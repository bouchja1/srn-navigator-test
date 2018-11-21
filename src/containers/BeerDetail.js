// @flow
import React from "react"
import { Text, View } from "react-native"
import { Beers } from "../storage/Storage"

// components

export default class DetailContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "BeerDetail",
  }

  render() {
    const { item } = this.props.navigation.state.params
    return (
      <View>
        <Text>{Beers[item.id - 1].description}</Text>
      </View>
    )
  }
}
