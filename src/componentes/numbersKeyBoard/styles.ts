import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: colors.black["900"],
  },

  header: {},

  paragraph: {
    color: colors.white["900"],
    fontSize: 18,
    textAlign: "center",
    fontFamily: "poppinsLight",
    fontWeight: "200",
  },

  button: {
    borderRadius: 20,
    backgroundColor: colors.brand,
  },

  number: {
    padding: 25,
    fontSize: 22,
  },
});
