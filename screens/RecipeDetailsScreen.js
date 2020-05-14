import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import { toggleFavourite } from "../store/actions/recipes";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const RecipeDetailsScreen = (props) => {
  const availableRecipes = useSelector((state) => state.recipes.recipes);
  const recipeId = props.navigation.getParam("recipeId");
  const isCurrentRecipeFavourite = useSelector((state) =>
    state.recipes.favouriteRecipes.some((recipe) => recipe.id === recipeId)
  );

  const selectedRecipe = availableRecipes.find(
    (recipe) => recipe.id === recipeId
  );

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(recipeId));
  }, [dispatch, recipeId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isCurrentRecipeFavourite });
  }, [isCurrentRecipeFavourite]);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={selectedRecipe.image}
            style={styles.image}
          />

          <View style={styles.details}>
            <DefaultText>{selectedRecipe.duration}m</DefaultText>
            <DefaultText>{selectedRecipe.complexity.toUpperCase()}</DefaultText>
            <DefaultText>
              {selectedRecipe.affordability.toUpperCase()}
            </DefaultText>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ingredients</Text>
        </View>
        <Card style={styles.dataContainer}>
          {selectedRecipe.ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{"\u2022" + " " + ingredient}</ListItem>
          ))}
        </Card>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Steps</Text>
        </View>
        <Card style={styles.dataContainer}>
          {selectedRecipe.steps.map((step) => (
            <ListItem key={step}>{"\u2022" + " " + step}</ListItem>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
};

RecipeDetailsScreen.navigationOptions = (navigationData) => {
  const toggleFavourite = navigationData.navigation.getParam("toggleFav");
  const recipeTitle = navigationData.navigation.getParam("recipeTitle");
  const isFavourite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: recipeTitle,

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favourite" iconName={isFavourite ? "ios-star" : "ios-star-outline"} onPress={toggleFavourite} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: Colors.secondaryColor,
  },

  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 250,
  },

  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: Colors.primaryColor,
  },

  titleContainer: {
    marginTop: 30,
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    color: Colors.accentColor,
  },

  listItem: {
    padding: 10,
  },

  dataContainer: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
});

export default RecipeDetailsScreen;
