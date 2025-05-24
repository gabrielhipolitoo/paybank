import Button from "@/componentes/button/Button";
import Logo from "@/componentes/Logo/logo";
import { styles } from "@/styles/stylesPage";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Text style={styles.title}>Bem vindo ao PayBank</Text>
        <Text style={styles.paragraph}>
          Seu dinheiro com liberdade, segurança e controle.
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button text="Entrar na sua conta"  redirection="/Login" typeButton="line" />
        <Text style={styles.span}>Ou</Text>
        <Button text="Crie sua conta agora"  />
      </View>
    </View>
  );
}
