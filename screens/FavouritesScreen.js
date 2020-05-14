import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import RecipeList from "../components/RecipeList";
import Colors from "../constants/Colors";
import FallbackText from "../components/FallbackText";

const FavouritesScreen = (props) => {
  const favouriteRecipes = useSelector(
    (state) => state.recipes.favouriteRecipes
  );

  if (favouriteRecipes.length === 0 || !favouriteRecipes) {
    return (
      <View style={styles.fallbackContainer}>
        <FallbackText> No favourite recipes found</FallbackText>
      </View>
    );
  }

  return (
    <RecipeList listData={favouriteRecipes} navigation={props.navigation} />
  );
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favourites",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  fallbackContent: {
    color: Colors.primaryColor,
    fontSize: 20
  },
});

export default FavouritesScreen;
