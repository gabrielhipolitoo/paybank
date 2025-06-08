import { colors } from "@/utils/colors";
import { StyleSheet } from "react-native";
import Password from "./password";

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: colors.brand,
    height: 70,
  },

  input: {
    width: "100%",
  },

  text: {
    color: colors.white["900"],
    fontSize: 18,
    textAlign: "center",
    fontFamily: "poppinsLight",
    fontWeight: "200",
  },

  error: {
    width: "80%",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white["900"],
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: colors.black["900"],
  },

  buttonOutput: {
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.brand,
    height: 70,
  },

  goBack: {
    marginBottom: 10,
    color: colors.brand,
    marginRight: "auto",
  },

  goBackText: {
    fontSize: 15,
    color: colors.brand,
  },

  //password

  containerPassword: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    width: "90%",
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

  BoxPassword: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    height: 30,
    marginBottom: 40,
  },

  fieldpass: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#000",
  },

  fieldpassSelected: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#000",
  },
});
