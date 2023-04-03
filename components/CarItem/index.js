import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { StyleButton } from "../StyledButton";

export const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyleButton 
        type="primary" 
        content={"Custom Order"} 
        onPress={() =>{
            console.log("Custom Order Pressed")
        }}
        />

        <StyleButton 
        type="secondary" 
        content={"Existing Inventory"} 
        onPress={() =>{
            console.log("Existing Inventory Pressed")
        }}
        />

    </View>
  );
};
