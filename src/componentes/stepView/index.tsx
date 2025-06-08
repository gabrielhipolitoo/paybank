import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/utils/colors";
import { styles } from "./style";
import { ViewDefault } from "../ViewDefault/ViewDefault";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type StepView = {
  icon: keyof typeof FontAwesome6.glyphMap;
  text: string;
  redirection: keyof ReactNavigation.RootParamList;
};

export default function StepView({ icon, redirection, text }: StepView) {
  const { navigate } = useNavigation();
  function nextFunction() {
    navigate(redirection);
  }

  return (
    <ViewDefault style={styles.container}>
      <FontAwesome6
        color={colors.brand}
        size={120}
        name={icon}
        style={{ marginTop: 50 }}
      />
      <View style={styles.footer}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity onPress={nextFunction} style={styles.button}>
          <Text style={styles.textButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ViewDefault>
  );
}
