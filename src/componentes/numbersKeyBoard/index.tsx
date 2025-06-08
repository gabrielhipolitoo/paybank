import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { styles } from "./styles";

type NumberType = {
  number: number;
  setStatePass: React.Dispatch<React.SetStateAction<string[]>>;
  statePass: string[];
};

export default function NumbersKeyBoard({
  setStatePass,
  statePass,
  number,
}: NumberType) {
  function selectNumber() {
    if (statePass.length === 4) {
      return console.log("Valor ja esta preenchido");
    }

    const valueString = String(number);
    setStatePass((prevState) => [...prevState, valueString]);
  }

  return (
    <TouchableOpacity onPress={selectNumber} style={styles.button}>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
}
