import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
export default function SlidingMenu() {
  return (
    <View style={styles.container}>
      <Text>SlidingMenu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: "100%",
    backgroundColor: "#FFB6C1",
  },
});
