import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import FormStepProvider from "@/context/formStep";

SplashScreen.preventAutoHideAsync();

export default function LayoutRoot() {
  const [loader, error] = useFonts({
    poppinsRegular: require("../../assets/fonts/Poppins-Regular.ttf"),
    poppinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    poppinsBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loader || error) {
      SplashScreen.hideAsync();
    }
  }, [loader, error]);

  if (!loader && !error) {
    return null;
  }
  return (
    <FormStepProvider>
      <Stack screenOptions={{ title: "", headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Login/index" />
      </Stack>
    </FormStepProvider>
  );
}
