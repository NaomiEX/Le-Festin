import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  Image,
} from "react-native";

import { useSelector } from "react-redux";

import Colors from "../constants/Colors";
import DefaultText from "../components/DefaultText";

const CategoryGridTile = (props) => {
  const availableRecipes = useSelector(
    (state) => state.recipes.filteredRecipes
  );

  const displayedRecipes = availableRecipes.filter(
    (recipe) => recipe.categoryIds.indexOf(props.id) >= 0
  );

  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.image} />
          </View>
          <View style={styles.titleContainer}>
            <DefaultText style={styles.title} numberOfLines={2}>
              {props.title}
            </DefaultText>
          </View>
          <View style={styles.infoContainer}>
          <DefaultText>Number of Recipes: {displayedRecipes.length}</DefaultText>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 6,
    height: 300,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },

  container: {
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    paddingVertical: 50,
    alignItems: "center",
  },

  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  titleContainer: {
    width: "90%",
    paddingTop: 25, 
  },

  infoContainer: {
    width: "90%",
  },

  title: {
    fontSize: 20,
  },
});

export default CategoryGridTile;
