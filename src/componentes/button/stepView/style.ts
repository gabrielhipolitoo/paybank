import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  footer: {
    width: "100%",
    alignItems: "center",
    height: "40%",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    width: "100%",
    fontFamily: "poppingRegular",
    color: colors.white["900"],
    marginTop: "auto",
    textAlign: "center",
  },

  button: {
    borderRadius: 10,
    width: "100%",
    marginTop: "auto",
    justifyContent: "center",
    backgroundColor: colors.brand,
    height: 70,
  },

  textButton: {
    color: colors.white["900"],
    fontSize: 18,
    textAlign: "center",
    fontFamily: "poppinsLight",
    fontWeight: "200",
  },
});
