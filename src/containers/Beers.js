// @flow
import React from "react"
import { Button, Text, View, FlatList } from "react-native"

// components

const beers = [
  {
    id: 1,
    name: "Svijany",
  },
  {
    id: 2,
    name: "Bernard",
  },
  {
    id: 3,
    name: "Plzeň",
  },
]

export default class BeersContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Beers",
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={beers}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={({ item }) => item.id}
        />

        <Button
          title="Go Home baby!"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    )
  }
}
