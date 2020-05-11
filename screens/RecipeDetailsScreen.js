import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const RecipeDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Recipe Details Screen</Text>
      <Button title="Go back to Categories" onPress={() => {
          props.navigation.popToTop();
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});

export default RecipeDetailsScreen;
