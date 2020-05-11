import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import Colors from "../constants/Colors";

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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(RecipesNavigator);
