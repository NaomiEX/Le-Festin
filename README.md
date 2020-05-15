# Le Festin
This app was created for a Computer Science project. 

The app functions as a cookbook where you can view, favourite, and filter recipes.

![Logo](./Images/logo.png)

## Table of contents
* [General info](#general-info)
* [Built with](#built-with)

## Getting started

### Prerequisites

Install Expo in the Play Store (Android) or the App Store (iOS)

### Getting access to the app

The app is published at . Click on the link and select launch Project on Expo (on your mobile device)

## General info
(This app has built-in navigation, through react-navigation, thus you can freely navigate between pages, with a back button on most pages, a bottom drawer, and a side drawer.)

The app's landing page is a scrollable page with several cards, each possessing an image and a title, denoting their represented category. When the card is tapped, the user will be brought to a screen with a list of recipes within that category.

All recipes are equipped with an image, a title, and 3 important details: how long it will take to make said recipe, it's complexity, and how affordable the required ingredients are. When a recipe is tapped, the user will be brought to a recipe detail screen.

The recipe detail screen offers a clear and large portrayal of the chosen recipe as well as the time it will take to complete that recipe, it's complexity, and it's affordability. In addition this page is where users will be able to view all the ingredients required, as well as a bullet point list of all the steps to follow in order to successfully make the dish.If the user takes a fancy to this particular recipe, they are able to tap on the star in the corner and mark it as a favourite. If the recipe is already a favourite, the user may tap the star again to un-favourite the recipe and it will disappear from the Favourites list.

If the user taps on the Favourite tab on the bottom drawer, they are then taken to a scrollable list of their favourite recipes where, as before, if the user were to tap on a specific recipe they are able to view the recipe detail screen.

When the user taps on the icon in the top left of the screen, a side-drawer will pop up where users are able to navigate between Recipes, Filters, and an About page.

In the filters screen users are able to turn on and off certain filter criteria such as: gluten-free, vegan, vegetarian, lactose-free. Once they have set the filters to their desire, they can tap on the save icon on the top right to save their preferences.

## Demonstration

![Demo](./video/demonstration.gif)

## Built with
* Node.js version 12.16.3
* Expo SDK v37.0.0
* React Native 0.62
* React Navigation 4.x
