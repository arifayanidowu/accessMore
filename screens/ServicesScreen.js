import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Services Page</Text>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
