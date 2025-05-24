import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },

  container: {
    flex: 1,
  },

  modalContent: {
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 12,
    height: "30%",
    backgroundColor: colors.white["500"],
  },

  title: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 5,
  },
  actionConfirm: {
    margin: "auto",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 40,
    backgroundColor: colors.brand,
  },
  text: {
    width: 320,
    fontSize: 22,
  },
});
