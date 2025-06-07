import { Input } from "@/componentes/input";
import ModalView from "@/componentes/ModalView";
import { ViewDefault } from "@/componentes/ViewDefault/ViewDefault";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import Button from "@/componentes/button/Button";
import { useEffect, useState } from "react";
type ErrorInputTypes = {
  title: string;
  text: string;
};

export default function Login() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { navigate } = useNavigation();
  const [modalActive, setModalActive] = useState(false);

  function handleNextStage() {
    navigate("password");
  }

  function onInvalid() {
    setModalActive(true);
  }

  return (
    <ViewDefault style={styles.container}>
      <>
        <Input
          error={errors.cpf?.message}
          formProps={{
            name: "cpf",
            control,
            rules: {
              required: "O cpf é obrigatório",
            },
          }}
          inputProps={{
            placeholder: "CPF",
            onSubmitEditing: handleSubmit(handleNextStage, onInvalid),
          }}
        />
        <Button
          onPress={handleSubmit(handleNextStage, onInvalid)}
          text="Continuar"
          typeButton="line"
        />
      </>

      <ModalView
        transparent
        animationType="slide"
        visible={modalActive}
        setActiveModal={setModalActive}
        title={errors.cpf?.message}
        text={"Verifique suas informações, e tente novamente"}
      />
    </ViewDefault>
  );
}
