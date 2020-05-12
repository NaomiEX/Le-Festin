import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";

const RecipeItem = (props) => {
  return (
    <View style={styles.recipeItem}>
      <TouchableNativeFeedback useForeground={true} onPress={props.onSelectRecipe}>
        <View>
          <View style={{ ...styles.recipeRow, ...styles.recipeMain }}>
            <ImageBackground
              source={{ uri: props.image }}
              blurRadius={3}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.recipeRow, ...styles.recipeDetail }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeRow: {
    flexDirection: "row",
  },

  recipeItem: {
    height: 200,
    width: "100%",
    backgroundColor: "rgba(250,116,79, 0.9)",
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },

  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  recipeMain: {
    height: "85%",
  },

  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontFamily: "open-sans",
    fontSize: 20,
    color: "white",

    textAlign: "center",
  },

  recipeDetail: {
    
    paddingHorizontal: 10,
    justifyContent: "space-around",
    alignItems: 'center',
    height: '15%'
  },
});

export default RecipeItem;
