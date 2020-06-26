import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity
      style={{ padding: 7, flexDirection: "row" }}
      onPress={onPress}
    >
      <Feather name="chevron-left" size={28} color="#009dff" />
      <Text style={styles.backText}>Voltar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backText: {
    marginLeft: 2,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#009dff",
  },
});
