import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Children, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function LayoutRoot({}:ChildNode) {
  const [loader, error] = useFonts({
    poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
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
    <Stack screenOptions={{headerShown: false }}>
    </Stack>
  );
}
