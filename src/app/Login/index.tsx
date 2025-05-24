import Input from "@/componentes/input";
import ModalView from "@/componentes/ModalView";
import { FormStateContext } from "@/context/formStep";
import { styles } from "@/styles/stylesLogin";
import { useContext, useState } from "react";
import { Button, Pressable } from "react-native";
import { Modal, Text, TouchableOpacity, View } from "react-native";

type Values = {};

export default function Login() {
  const { formState, nextButton, previousButton } =
    useContext(FormStateContext);

  const [modalActive, setModalActive] = useState(false);
  const [errorInput, setErrorInput] = useState<
    | {
        title: string;
        text: string;
      }
    | {}
  >({});
  const [value, setValue] = useState<{ cpf: string; password: string }>({
    cpf: "",
    password: "",
  });

  function verifyInput() {
    if (!value.cpf) {
      setErrorInput({
        title: "Ops, Cpf inválido",
        text: "Por favor, verique se as informações que você inseriu, e tente novamante",
      });
      return setModalActive(true);
    }
    setErrorInput({});
  }
  console.log(formState);
  return (
    <View style={styles.container}>
      {formState === 1 && (
        <>
          <Input placeholder="Digite seu cpf" />
          <TouchableOpacity onPress={nextButton} style={styles.button}>
            <Text style={styles.text}>Continuar</Text>
          </TouchableOpacity>
        </>
      )}

      {formState === 2 && (
        <>
          <Input secureTextEntry placeholder="Digite sua senha" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={previousButton}
            style={styles.buttonOutput}
          >
            <Text style={styles.text}>Voltar</Text>
          </TouchableOpacity>
        </>
      )}

      {/* <ModalView text="" /> */}
    </View>
  );
}
