import React from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";

import Colors from "../constants/Colors";

import RecipeItem from "../components/RecipeItem";

const RecipeList = (props) => {
  const renderRecipeItem = (itemData) => {
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
