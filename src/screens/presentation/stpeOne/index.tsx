import { View, Text } from "react-native";
import React from "react";
import { ViewDefault } from "@/componentes/ViewDefault/ViewDefault";
import { styles } from "./styles";
import StepView from "@/componentes/stepView";

export function StepOne() {
  return (
    <StepView
      text="Tecnologia de ponta, todas transações são criptografas "
      icon={"lock"}
      redirection={"stepTwo"}
    />
  );
}
