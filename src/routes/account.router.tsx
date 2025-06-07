import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/home";
import Login from "@/screens/login/Login";
import Password from "@/screens/login/password";

const { Navigator, Screen } = createNativeStackNavigator();
export function AccountRouter() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="login" component={Login} />
      <Screen name="password" component={Password} />
    </Navigator>
  );
}
