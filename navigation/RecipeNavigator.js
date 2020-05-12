import React from "react";
import { Platform, Text } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import AboutScreen from "../screens/AboutScreen";

import Colors from "../constants/Colors";

const defaultStackNavigatorOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor:
    Platform.OS === "android" ? Colors.secondaryColor : Colors.primaryColor,
};

const RecipesNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryRecipes: {
      screen: CategoryRecipesScreen,
    },
    RecipeDetail: {
      screen: RecipeDetailsScreen,
    },
  },
  { defaultNavigationOptions: defaultStackNavigatorOptions }
);

const FavouritesNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    RecipeDetail: RecipeDetailsScreen,
  },
  { defaultNavigationOptions: defaultStackNavigatorOptions }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  { defaultNavigationOptions: defaultStackNavigatorOptions }
);

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigatorOptions,
  }
);

const tabScreenConfig = {
  Recipes: {
    screen: RecipesNavigator,
    navigationOptions: {
      tabBarLabel: "All Recipes",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={28} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>All Recipes</Text>
        ) : (
          "All Recipes"
        ),
    },
  },
  Favourites: {
    screen: FavouritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={28} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favourites</Text>
        ) : (
          "Favourites"
        ),
    },
  },
};

const RecipesFavTabsNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.secondaryColor,
        inactiveColor: "rgba(78,76,74,0.5)",
        shifting: true,
        barStyle: { backgroundColor: Colors.primaryColor },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: { fontFamily: "open-sans-bold" },
          activeTintColor: Colors.primaryColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    RecipesFavourites: {
      screen: RecipesFavTabsNavigator,
      navigationOptions: {
        drawerLabel: "Recipes",
        drawerIcon: (drawerInfo) => {
          return (
            <Ionicons
              name="md-restaurant"
              size={28}
              color={drawerInfo.tintColor}
            />
          );
        },
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerIcon: (drawerInfo) => {
          return (
            <Ionicons name="md-switch" size={28} color={drawerInfo.tintColor} />
          );
        },
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerIcon: (drawerInfo) => {
          return (
            <Ionicons
              name="md-information-circle-outline"
              size={28}
              color={drawerInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondaryColor,
      inactiveTintColor: "rgba(78,76,74,0.5)",
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
      },
    },
    drawerBackgroundColor: Colors.primaryColor,
    drawerWidth: 200,
  }
);

export default createAppContainer(MainNavigator);
