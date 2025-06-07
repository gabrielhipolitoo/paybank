import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  modalContent: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 12,
    height: height * 0.4,
    backgroundColor: colors.white["900"],
  },

  title: {
    fontFamily: "poppinsRegular",
    fontSize: 23,
    marginTop: 10,
    marginBottom: 10,
  },

  text: {
    width: 320,
    color: colors.gray["300"],
    fontFamily: "poppinsRegular",
    fontSize: 19,
  },

  actionConfirm: {
    margin: "auto",
    padding: 20,
    width: "98%",
    borderRadius: 10,
    paddingHorizontal: 40,
    backgroundColor: colors.brand,
  },

  textConfirm: {
    color: colors.white["900"],
    fontSize: 22,
    textAlign: "center",
  },
});
