import {
  ExternalPathString,
  Href,
  HrefObject,
  Link,
  LinkProps,
  RelativePathString,
  useRouter,
  Route,
} from "expo-router";
import { styles } from "./styles";
import { Text, TouchableOpacity } from "react-native";
type ButtonProps = {
  text: string;
  typeButton?: "line" | "default";
  redirection?: Route;
};

export default function Button({ text, typeButton, redirection }: ButtonProps) {
  const router = useRouter();

  function handleNavigate() {
    if (redirection) router.push(redirection);
  }

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      activeOpacity={0.4}
      style={[
        styles.container,
        typeButton === "line" ? styles.line : styles.default,
      ]}
    >
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}
