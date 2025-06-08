import { View, Text } from "react-native";
import React from "react";
import StepView from "@/componentes/stepView";

export function StepTwo() {
  return (
    <StepView
      text="Monitore seus pagamentos de forma inteligente"
      icon={"desktop"}
      redirection="stepThree"
    />
  );
}
