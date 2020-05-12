import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const AboutScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
            }}
          />
        </View>
        <Card style={styles.cardContainer}>
          <Text style={styles.infoTitle}>
            This app was created by{" "}
            <Text style={styles.underlineInfo}>Michelle Adeline</Text> (Grade
            12) for a Computer Science project
          </Text>
          <View
            style={{
              borderBottomColor: "rgba(245,240,227, 0.7)",
              borderBottomWidth: 2,
            }}
          />
          <Text style={styles.info}>
            {"\u2022" + " "}This is a Recipe App where you can browse the
            selection of recipes based on different categories.
          </Text>
          <Text style={styles.info}>
            {"\u2022" + " "}You are also able to favourite certain recipes,
            which you are then able to view in the favourites screen.
          </Text>
          <Text style={styles.info}>
            {"\u2022" + " "}You may also filter the selection of recipes shown
            based on certain criteria
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
};

AboutScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "About Page",
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
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.secondaryColor,
    padding: 20,
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    borderWidth: 5,
    borderColor: Colors.primaryColor,
    overflow: "hidden",
    elevation: 5,
    marginBottom: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  cardContainer: {
    width: 300,
    height: 550,
  },

  infoContainer: {
    padding: 25,
  },

  infoTitle: {
    textAlign: "center",
    fontFamily: "open-sans",
    color: Colors.secondaryColor,
    textShadowColor: "rgba(78,76,74,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1,
    fontSize: 17,
  },

  info: {
    textAlign: "center",
    fontFamily: "open-sans",
    color: Colors.secondaryColor,
    textShadowColor: "rgba(78,76,74,0.2)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1,
    fontSize: 16,
  },

  underlineInfo: {
    textDecorationLine: "underline",
    fontFamily: "open-sans-bold",
  },
});

export default AboutScreen;
