import { NavigationContainer } from "@react-navigation/native";
import { AccountRouter } from "./account.router";
import { PresentationRoutes } from "./presentation.router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="PresentationRoutes" component={PresentationRoutes} />
        <Screen name="AccountRoutes" component={AccountRouter} />
      </Navigator>
    </NavigationContainer>
  );
}
