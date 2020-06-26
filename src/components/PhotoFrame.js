import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PhotoFrame({ source }) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.img} />
      <TouchableOpacity style={styles.button}>
        {source ? (
          <Feather name="x" color="#ef790e" size={20} />
        ) : (
          <Feather name="plus" color="#ef790e" size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c3c3c3",
    marginBottom: 15,
    width: "30%",
    height: "30%",
    borderRadius: 10,
  },

  button: {
    position: "absolute",
    zIndex: 0,
    backgroundColor: "#FFF",
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: "center",
    justifyContent: "center",
    top: "90%",
    left: "80%",
  },

  img: {
    resizeMode: "cover",
    borderRadius: 10,
    flex: 1,
  },
});
