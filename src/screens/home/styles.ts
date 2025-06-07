import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },

  title: {
    width: "75%",
    fontFamily: "poppinsBold",
    fontSize: 32,
    color: colors.white["900"],
    fontWeight: "800",
  },

  paragraph: {
    width: "90%",
    marginTop: 5,
    fontFamily: "poppinsLight",
    color: colors.white["500"],
    fontSize: 27,
    fontWeight: "500",
  },

  containerButton: {
    justifyContent: "space-between",
    height: 200,
    alignItems: "center",
  },

  span: {
    fontWeight: "600",
    color: colors.white["500"],
    textAlign: "center",
  },
});
