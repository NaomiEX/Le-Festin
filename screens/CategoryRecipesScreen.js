import React from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";

import Colors from "../constants/Colors";
import RecipeItem from "../components/RecipeItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectRecipe={() => {}}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "95%" }}
        data={displayedMeals}
        renderItem={renderRecipeItem}
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
