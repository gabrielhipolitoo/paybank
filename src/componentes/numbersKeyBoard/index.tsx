import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

type NumberType = {
  number: number;
};

export default function NumbersKeyBoard({ number }: NumberType) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
}
