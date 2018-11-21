// @flow
import React from "react"
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
} from "react-native"

// components
import { Title, Button, Image } from "../components"
import { Colors } from "../themes"

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  image: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  imageWrapper: {
    paddingVertical: 20,
    height: 287,
  },
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

const beers = ["plzeň", "unětice", "bernard"]

export default class RootContainer extends React.PureComponent<null> {
  static navigationOptions = {
    title: "Home",
  }

  state = {
    count: 0,
  }

  onButtonPress = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  navigate = () => {
    this.props.navigation.navigate("Detail", {
      item: {
        image: "https://www.placecage.com/c/200/300",
      },
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.outerWrapper}>
        <View style={styles.container}>
          <Title>{this.state.count}</Title>
          <Button theme={Colors.primary} onPress={this.onButtonPress}>
            Add +1
          </Button>
          <Button theme={Colors.primary} onPress={this.navigate}>
            Detail screen
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}
