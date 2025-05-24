import { View, Text } from "react-native";
import Logo from "../Logo/logo";
import { styles } from "./styles";

export default function PageInitial() {
  <View style={styles.container}>
    <Logo />
    <View>
      <Text>Bem vindo ao PayBank</Text>
      <Text>Seu dinheiro com liberdade, segurança e controle.</Text>
    </View>
    <View></View>
  </View>;
}
