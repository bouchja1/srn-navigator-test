// @flow
import React from "react"
import { Button, Text, View } from "react-native"

// components

export default class ContactContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Contact",
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
          title="Go Home baby!"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    )
  }
}
