import { View, Text } from "react-native";
import React from "react";
import { ViewDefault } from "@/componentes/ViewDefault/ViewDefault";
import { styles } from "./styles";

export function StepOne() {
  return (
    <ViewDefault style={styles.container}>
      <Text>Step 1</Text>
    </ViewDefault>
  );
}
