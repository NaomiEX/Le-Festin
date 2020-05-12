import React from "react";

import RecipeList from "../components/RecipeList";

import { CATEGORIES, RECIPES } from "../data/dummy-data";

const CategoryRecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedRecipes = RECIPES.filter(
    (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  );

  

  return <RecipeList listData={displayedRecipes} navigation={props.navigation} />
};

CategoryRecipesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};


export default CategoryRecipesScreen;
