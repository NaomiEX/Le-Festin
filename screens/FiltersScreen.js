import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  Dimensions,
  Button,
  ToastAndroid,
  Toas
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";


import { setFilters } from "../store/actions/recipes";

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

const Toast = (props) => {
  if(props.visible) {
    ToastAndroid.show("Filters set!", ToastAndroid.SHORT);
  }
  return null;
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const [openToast, setOpenToast] = useState(false);

  const toastHandler = (action) => {
    action ? setOpenToast(true) : setOpenToast(false);
  };

  

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    toastHandler(true);

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch, openToast]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  useEffect(() => {
    setOpenToast(false);
  }, [openToast]);

  return (
    <View style={styles.screen}>
      <Toast visible={openToast}/>
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

  ToastContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },

  ToastContentContainer: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.secondaryColor,
    borderWidth: 2  
  },

  ToastText: {
    color: Colors.secondaryColor,
    fontFamily: 'open-sans-bold'
  }
});

export default FiltersScreen;
