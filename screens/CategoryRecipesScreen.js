import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Recipes Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

CategoryRecipesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryRecipesScreen;
