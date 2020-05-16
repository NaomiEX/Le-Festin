# Le Festin
This app was created by Michelle Adeline for a Computer Science project. 

The app functions as a cookbook where you can view, favourite, and filter recipes.

![Logo](./Images/logo.png)

## Table of contents
* [Getting started](#getting-started)
* [General info](#general-info)
* [Demo](#demonstration)
* [Features](#features)
* [Code](#code-specifications)
* [Built with](#built-with)

## Getting started

### Prerequisites

Install Expo in the Play Store (Android) or the App Store (iOS)

### Getting access to the app

The app is published at https://expo.io/@naomiex/le-festin. Click on the link and select Open project using Expo (on your mobile device), which will automatically open the Expo app where, after a short loading screen, you will be greeted with the landing screen of the app.

## General info

The app's landing page is a scrollable page with several cards, each possessing an image and a title, denoting their represented category. When the card is tapped, the user will be brought to a screen with a list of recipes within that category.

All recipes are equipped with an image, a title, and 3 important details: how long it will take to make said recipe, it's complexity, and how affordable the required ingredients are. When a recipe is tapped, the user will be brought to a recipe detail screen.

The recipe detail screen offers a clear and large portrayal of the chosen recipe as well as the time it will take to complete that recipe, it's complexity, and it's affordability. In addition this page is where users will be able to view all the ingredients required, as well as a bullet point list of all the steps to follow in order to successfully make the dish. If the user takes a fancy to a particular recipe, they are able to tap on the star in the corner and mark it as a favourite. If the recipe is already a favourite, the user may tap the star again to un-favourite the recipe and it will disappear from the Favourites list.

If the user taps on the Favourite tab on the bottom drawer, they are then taken to a scrollable list of their favourite recipes where, as before, if the user were to tap on a specific recipe they are able to view the recipe detail screen.

When the user taps on the icon in the top left of the screen, a side-drawer will pop up where users are able to navigate between Recipes, Filters, and an About page.

In the filters screen users are able to turn on and off certain filter criteria such as: gluten-free, vegan, vegetarian, lactose-free. Once they have set the filters to their desire, they can tap on the save icon on the top right to save their preferences.

## Demonstration

![Demo](./video/demonstration.gif)

## Features
* View recipes of the chosen category
* Favourite certain recipes
* Filter recipes to match certain criteria
* Navigation through bottom drawer and side drawer

## Code specifications

This app has built-in navigation, through react-navigation, thus you can freely navigate between pages, with a back button on most pages, a bottom drawer to navigate between All Recipes and Favourites, and a side drawer to navigate between Recipes, Filters, and About.

Default Navigation Options:
```js
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
  headerTitleAlign: 'center',
  ...TransitionPresets.SlideFromRightIOS
};
```

Recipes Navigator:

```js
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

```
Bottom Drawer Navigator:
```js
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
        inactiveColor: Colors.inactiveGray,
        shifting: true,
        barStyle: { backgroundColor: Colors.primaryColor },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: { fontFamily: "open-sans-bold" },
          activeTintColor: Colors.primaryColor,
        },
      });

```
Side Drawer Navigator:
```js
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
      inactiveTintColor: Colors.inactiveGray,
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
      },
    },
    drawerBackgroundColor: Colors.primaryColor,
    drawerWidth: 200,
  }
);
```

In addition, state management is done through redux so favourites and filters can be implemented.

#### Actions:

* For setting favourites
```js
export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export const toggleFavourite = (id) => {
  return { type: TOGGLE_FAVOURITE, recipeId: id }
};
```
* For setting filters
```js
export const SET_FILTERS = 'SET_FILTERS';

export const setFilters = filterSettings => {
  return { type: SET_FILTERS, filters: filterSettings }
};
```

#### Reducers:

```js
const recipeReducer = (state = initialState, action) => {
    switch (action.type) { 
        //for setting favourites
        case TOGGLE_FAVOURITE: 
        const existingIndex = state.favouriteRecipes.findIndex(recipe => recipe.id === action.recipeId);
        if (existingIndex >= 0) {
            const updatedFavouriteRecipes = [...state.favouriteRecipes];
            updatedFavouriteRecipes.splice(existingIndex, 1);
            return { ...state, favouriteRecipes: updatedFavouriteRecipes };
        }else {
            const recipeToAdd = state.recipes.find(recipe => recipe.id === action.recipeId);
            return { ...state, favouriteRecipes: state.favouriteRecipes.concat(recipeToAdd) };
        }
        //for setting filters
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredRecipes = state.recipes.filter(recipe => {
                if (appliedFilters.glutenFree && !recipe.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !recipe.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !recipe.isVegetarian) {
                    return false;
                }
                if (appliedFilters.vegan && !recipe.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredRecipes: updatedFilteredRecipes }
        default:
            return state;
    }
}

```

## Built with
* Node.js version 12.16.3
* Expo SDK v37.0.0
* React Native 0.62
* React Navigation 4.x
* React Redux version 7.2
