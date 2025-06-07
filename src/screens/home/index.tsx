import Button from "@/componentes/button/Button";
import Logo from "@/componentes/Logo/logo";
import { ViewDefault } from "@/componentes/ViewDefault/ViewDefault";
import { styles } from "@/screens/home/styles";
import { Text, View } from "react-native";

export function Home() {
  return (
    <ViewDefault style={styles.container}>
      <Logo />
      <View>
        <Text style={styles.title}>Bem vindo ao PayBank</Text>
        <Text style={styles.paragraph}>
          Seu dinheiro com liberdade, segurança e controle.
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          text="Entrar na sua conta"
          redirection="login"
          typeButton="line"
        />
        <Text style={styles.span}>Ou</Text>
        <Button text="Crie sua conta agora" redirection="login" />
      </View>
    </ViewDefault>
  );
}
