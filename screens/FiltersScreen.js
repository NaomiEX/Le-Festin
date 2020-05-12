import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const FilterCriteria = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.criteria}</DefaultText>
      <Switch
        trackColor={{ true: Colors.secondaryColor, false: Colors.inactiveGray }}
        thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
        value={props.value}
        onValueChange={props.onChange}
        style={styles.switch}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Available Filters</Text>
      </View>

      <Card style={styles.allFiltersContainer}>
        <FilterCriteria
          criteria="Gluten-free"
          value={isGlutenFree}
          onChange={(newValue) => {
            setIsGlutenFree(newValue);
          }}
        />
        <FilterCriteria
          criteria="Lactose-free"
          value={isLactoseFree}
          onChange={(newValue) => {
            setIsLactoseFree(newValue);
          }}
        />
        <FilterCriteria
          criteria="Vegan"
          value={isVegan}
          onChange={(newValue) => {
            setIsVegan(newValue);
          }}
        />
        <FilterCriteria
          criteria="Vegetarian"
          value={isVegetarian}
          onChange={(newValue) => {
            setIsVegetarian(newValue);
          }}
        />
      </Card>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
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
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
    color: Colors.primaryColor,
    textDecorationLine: "underline",
  },

  titleContainer: {
    marginTop: 20,
    marginBottom: 40,
  },

  allFiltersContainer: {
    width: "80%",
    alignItems: "center",
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    height: 50,
    marginVertical: 10,
  },

  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
});

export default FiltersScreen;
