import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "@/utils/colors";
import { styles } from "./style";
import { ViewDefault } from "@/componentes/ViewDefault/ViewDefault";
type StepView = {
  icon: keyof typeof FontAwesome6.glyphMap;
  text: string;
  nextFunction?: () => void;
  redirection?: any;
};

export default function StepView({
  icon,
  nextFunction,
  redirection,
  text,
}: StepView) {
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
        <TouchableOpacity
          onPress={nextFunction || (() => {})}
          style={styles.button}
        >
          <Text style={styles.textButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ViewDefault>
  );
}
