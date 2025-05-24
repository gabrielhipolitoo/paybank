import Input from "@/componentes/input";
import ModalView from "@/componentes/ModalView";
import { FormStateContext } from "@/context/formStepContext";
import { styles } from "@/styles/stylesLogin";
import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ErrorInputTypes = {
  title: string;
  text: string;
};

export default function Login() {
  const { formState, nextButton, previousButton } =
    useContext(FormStateContext);

  const [modalActive, setModalActive] = useState(false);
  const [errorInput, setErrorInput] = useState<ErrorInputTypes>(
    {} as ErrorInputTypes
  );
  const [value, setValue] = useState<{ cpf: string; password: string }>({
    cpf: "",
    password: "",
  });

  function verifyInput() {
    if (!value.cpf.length) {
      setErrorInput({
        title: "Ops, Cpf inválido",
        text: "Por favor, verique se as informações que você inseriu, e tente novamante",
      });
      return setModalActive(true);
    }
    nextButton();
    setErrorInput({} as ErrorInputTypes);
    setModalActive(false);
  }
  console.log(value);
  return (
    <View style={styles.container}>
      {formState === 1 && (
        <>
          <Input
            placeholder="Digite seu cpf"
            value={value.cpf}
            onChangeText={(valueInput) =>
              setValue((prevState) => ({ ...prevState, cpf: valueInput }))
            }
            inputMode="numeric"
          />
          <TouchableOpacity onPress={verifyInput} style={styles.button}>
            <Text style={styles.text}>Continuar</Text>
          </TouchableOpacity>
        </>
      )}

      {formState === 2 && (
        <>
          <Input
            secureTextEntry
            value={value.password}
            placeholder="Digite sua senha"
          />
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

      <ModalView
        transparent
        animationType="slide"
        visible={modalActive}
        setActiveModal={setModalActive}
        title={errorInput.title}
        text={errorInput.text}
      />
    </View>
  );
}
