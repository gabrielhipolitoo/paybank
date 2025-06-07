import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    height: 70,
  },

  title: {
    color: colors.white["900"],
    fontSize: 18,
    textAlign: "center",
    fontFamily: "poppinsLight",
    fontWeight: "200",
  },

  line: {
    textAlign: "center",
    borderWidth: 1,
    backgroundColor: colors.brand,
  },

  default: {
    backgroundColor: colors.black["500"],
  },
});
