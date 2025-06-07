import {
  TextInput,
  TextInputProps,
  View,
  ViewProps as ViewPropsTypes,
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/utils/colors";
import { Controller, UseControllerProps } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { forwardRef } from "react";

type InputProps = {
  error: string;
  icon?: keyof typeof Feather.glyphMap;
  inputProps: TextInputProps;
  formProps: UseControllerProps;
  ViewProps: ViewPropsTypes;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ error = "", icon, inputProps, formProps, ViewProps }, ref) => {
    return (
      <Controller
        {...formProps}
        render={({ field }) => (
          <View {...ViewProps} style={styles.container} {...ViewProps}>
            <Feather name={icon} size={24} />
            <TextInput
              {...inputProps}
              ref={ref}
              style={styles.input}
              value={field.value}
              onChangeText={field.onChange}
              placeholderTextColor={colors.gray["100"]}
            />
          </View>
        )}
      />
    );
  }
);

export { Input };
