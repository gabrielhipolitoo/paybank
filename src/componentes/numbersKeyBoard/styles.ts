import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: "100%",
    width: 70,
    backgroundColor: colors.brand,
  },

  number: {
    color: colors.white["900"],
    padding: 25,
    textAlign: "center",
    fontSize: 22,
  },
});
