import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RECIPES } from "../data/dummy-data";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import RecipeList from "../components/RecipeList";
import Colors from "../constants/Colors";

const FavouritesScreen = (props) => {
  const favRecipes = RECIPES.filter(
    (recipe) => recipe.id === "m1" || recipe.id === "m2"
  );

  return <RecipeList listData={favRecipes} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favourites",
    headerStyle: {backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",},
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    ),
  };
};


export default FavouritesScreen;
