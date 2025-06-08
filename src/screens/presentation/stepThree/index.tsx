import { View, Text } from "react-native";
import React from "react";
import StepView from "@/componentes/stepView";

export function StepThree() {
  return (
    <StepView
      text="Guarde dinheiro de maneira organizada de acordo com seus objetivos"
      icon={"piggy-bank"}
      redirection={"stepFour"}
    />
  );
}
