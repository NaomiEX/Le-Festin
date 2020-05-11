import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RecipeItem = (props) => {
  return (
    <View style={styles.recipeItem}>
      <TouchableOpacity onPress={props.onSelectRecipe}>
        <View>
          <View style={{ ...styles.recipeRow, ...styles.recipeMain }}>
            <ImageBackground
              source={{ uri: props.image }}
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
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    backgroundColor: "#e5e5e5",
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
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },

  title: {
    fontFamily: "open-sans-bold",
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
