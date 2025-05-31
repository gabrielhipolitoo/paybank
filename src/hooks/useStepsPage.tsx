import { View, Text } from "react-native";
import { useState } from "react";
import StepView from "@/componentes/stepView";
export default function useStepsPage() {
  const [countpage, setCounPage] = useState<number>(0);
  console.log(countpage);
  function nextButton() {
    if (countpage >= 0) setCounPage(countpage + 1);
  }
  const arrayStep: React.JSX.Element[] = [
    <StepView
      key={"step_view_first"}
      icon="lock"
      text="Tecnologia de ponta, todas transações são criptografas"
      nextFunction={nextButton}
    />,
    <StepView
      key={"step_view_second"}
      icon="desktop"
      text="Monitore seus pagamentos de forma inteligente"
      nextFunction={nextButton}
    />,
    <StepView
      key={"step_view_three"}
      icon="piggy-bank"
      text="Guarde dinheiro de maneira organizada de acordo com seus objetivos.
"
      nextFunction={nextButton}
    />,
    <StepView
      key={"step_view_second"}
      icon="pix"
      text="Realize pix com sgurança e praticidade"
      redirection="/Home"
    />,
  ];
  function stepElement() {
    return arrayStep.filter((element, i) => i === countpage);
  }

  return { stepElement, arrayStep };
}
