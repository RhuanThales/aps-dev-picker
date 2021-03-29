import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

class Header extends Component {
  render() {
    let imagem =
      "https://api-private.atlassian.com/users/b31462af96502c206343630bdeb3ac9d/avatar";
    return (
      <View style={styles.headerOpts}>
        <Image
          source={{ uri: imagem }}
          style={{ width: 35, height: 40, alignItems: "flex-start" }}
        ></Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerOpts: {
    backgroundColor: "blue",
    height: 50,
    width: 360,
  },
});

export default Header;