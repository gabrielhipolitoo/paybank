import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type InputProps = TextInputProps & {};

export default function Input({ ...rest }: InputProps) {
  return (
    <TextInput
    {...rest}
      placeholderTextColor={colors.gray["100"]}
      style={styles.container}
    />
  );
}
