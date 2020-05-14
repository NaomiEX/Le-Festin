import React from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";
import { useSelector } from 'react-redux';

import Colors from "../constants/Colors";

import RecipeItem from "../components/RecipeItem";

const RecipeList = (props) => {
  const favouriteRecipes = useSelector(state => state.recipes.favouriteRecipes);

  const renderRecipeItem = (itemData) => {
    const isFavourite = favouriteRecipes.some(recipe => recipe.id === itemData.item.id);
    return (
      <RecipeItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectRecipe={() => {
          props.navigation.navigate({
            routeName: "RecipeDetail",
            params: {
              recipeId: itemData.item.id,
              recipeTitle: itemData.item.title,
              isFav: isFavourite
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "95%" }}
        data={props.listData}
        renderItem={renderRecipeItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondaryColor,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 5
  },
});

export default RecipeList;
