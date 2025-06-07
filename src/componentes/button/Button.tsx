import { Route, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import {
  ButtonProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
type ButtonTypes = TouchableOpacityProps & {
  text: string;
  typeButton?: "line" | "default";
  redirection?: keyof ReactNavigation.RootParamList;
};

export default function Button({
  text,
  typeButton,
  redirection,
  ...rest
}: ButtonTypes) {
  const { navigate } = useNavigation();
  function handleNavigate() {
    if (redirection) navigate(redirection);
  }

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      activeOpacity={0.4}
      style={[
        styles.container,
        typeButton === "line" ? styles.line : styles.default,
      ]}
      {...rest}
    >
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}
