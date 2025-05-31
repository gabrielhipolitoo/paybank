import Button from "@/componentes/button/Button";
import Logo from "@/componentes/Logo/logo";
import StepView from "@/componentes/stepView";
import useStepsPage from "@/hooks/useStepsPage";
import { styles } from "@/styles/stylesPage";
import { Text, View } from "react-native";

export default function Home() {
  const { stepElement } = useStepsPage();
  return stepElement();
}
