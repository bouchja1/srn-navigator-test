// @flow
import React from "react"
import { Button, Text, View, FlatList, StyleSheet } from "react-native"
import { Beers } from "../storage/Storage"

// components

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default class BeersContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Beers",
  }

  _onPressBeer = () => {}

  _keyExtractor = item => item.id

  _renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() => {
        this.props.navigation.navigate("BeerDetail", {
          item: {
            id: item.id,
          },
        })
      }}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Beers}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}
