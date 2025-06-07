import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    alignItems: "center",
    margin: "auto",
  },

  iconUser: {
    marginTop: 30,
    marginBottom: 30,
  },

  paragraph: {
    color: colors.white["900"],
    fontSize: 18,
    textAlign: "center",
    fontFamily: "poppinsLight",
    fontWeight: "200",
    marginBottom: 20,
  },
});
