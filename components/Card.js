import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 40,
    backgroundColor: Colors.primaryColor,
    elevation: 5,
    justifyContent: "space-around",
    padding: 25
  },
});

export default Card;
