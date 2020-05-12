import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { RECIPES } from "../data/dummy-data";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText style={styles.data}>{props.children}</DefaultText>
    </View>
  );
};

const RecipeDetailsScreen = (props) => {
  const recipeId = props.navigation.getParam("recipeId");

  const selectedRecipe = RECIPES.find((recipe) => recipe.id === recipeId);

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: selectedRecipe.imageUrl }}
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
        <View style={styles.dataContainer}>
          {selectedRecipe.ingredients.map((ingredient) => (
            <ListItem key={ingredient}>{"\u2022" + " " + ingredient}</ListItem>
          ))}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Steps</Text>
        </View>
        <View style={styles.dataContainer}>
          {selectedRecipe.steps.map((step) => (
            <ListItem key={step}>{"\u2022" + " " + step}</ListItem>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

RecipeDetailsScreen.navigationOptions = (navigationData) => {
  const recipeId = navigationData.navigation.getParam("recipeId");

  const selectedRecipe = RECIPES.find((recipe) => recipe.id === recipeId);

  return {
    headerTitle: selectedRecipe.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log("Item favourited");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: Colors.secondaryColor
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
    marginTop: 30
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    color: Colors.accentColor
  },

  listItem: {
    padding: 10,
  },

  dataContainer: {
    marginVertical: 10,
    marginHorizontal: 30,
    borderColor: Colors.accentColor,
    borderRadius: 30,
    borderWidth: 4
  },
  
  data: {
    color: Colors.primaryColor,
  }
});

export default RecipeDetailsScreen;
