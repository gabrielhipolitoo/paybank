import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StepOne } from "@/screens/presentation/stpeOne";
import { StepTwo } from "@/screens/presentation/stepTwo";
import { StepThree } from "@/screens/presentation/stepThree";
import { Home } from "@/screens/home";
import Password from "@/screens/login/password";
import Login from "@/screens/login/Login";
import { StepFour } from "@/screens/presentation/stepFour";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="stepOne" component={StepOne} />
        <Screen name="stepTwo" component={StepTwo} />
        <Screen name="stepThree" component={StepThree} />
        <Screen name="stepFour" component={StepFour} />
        <Screen name="home" component={Home} />
        <Screen name="login" component={Login} />
        <Screen name="password" component={Password} />
      </Navigator>
    </NavigationContainer>
  );
}
