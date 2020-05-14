import React from "react";
import { View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

import RecipeList from "../components/RecipeList";
import FallbackText from "../components/FallbackText";

import { CATEGORIES } from "../data/dummy-data";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableRecipes = useSelector(
    (state) => state.recipes.filteredRecipes
  );

  const displayedRecipes = availableRecipes.filter(
    (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  );

  if (displayedRecipes.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <FallbackText>No recipes found matching set filters</FallbackText>
      </View>
    );
  }

  return (
    <RecipeList listData={displayedRecipes} navigation={props.navigation} />
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
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
});

export default CategoryRecipesScreen;
