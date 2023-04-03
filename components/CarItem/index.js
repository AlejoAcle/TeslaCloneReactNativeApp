import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { StyleButton } from "../StyledButton";

export const CarItem = () => {

    const {name, tagLine, image, tagLineCTA } = props.car;


  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagLine}{''}
            <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.log("Custom Order Pressed");
          }}
        />

        <StyleButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.log("Existing Inventory Pressed");
          }}
        />
      </View>
    </View>
  );
};