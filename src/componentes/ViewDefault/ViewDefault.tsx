import { View, ViewProps, ImageBackground, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@/utils/colors";

type ViewPropsType = ViewProps & {
  children: ReactNode;
};

export function ViewDefault({ children, ...rest }: ViewPropsType) {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={styles.container}
    >
      <View {...rest}>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black["900"],
  },
});
