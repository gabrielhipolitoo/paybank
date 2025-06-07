import { StepThree } from "@/screens/presentation/stepThree";
import { StepTwo } from "@/screens/presentation/stepTwo";
import { StepOne } from "@/screens/presentation/stpeOne";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();
export function PresentationRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="stepOne" component={StepOne} />
      <Screen name="stepTwo" component={StepTwo} />
      <Screen name="stepThree" component={StepThree} />
    </Navigator>
  );
}
