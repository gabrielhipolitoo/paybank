import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black["500"],
    width: "100%",
    fontFamily: "poppinsRegular",
    borderRadius: 10,
    padding: 12,
    height: 70,
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    color: colors.white["900"],
  },

  input: {
    width: "100%",
    color: colors.white["900"],
  },
});
