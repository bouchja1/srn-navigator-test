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
    return (
      <View>
        <Text>beers</Text>
      </View>
    )
  }
}
