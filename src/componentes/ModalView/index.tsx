import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useState } from "react";
type PropsModalView = {
  text: string;
  title: String;
  trigger: boolean;
};

export default function ModalView({ text, title, trigger }: PropsModalView) {
  const [modalActive, setModalActive] = useState(trigger);

  function closeModal() {
    setModalActive(false);
  }

  return (
    <Modal transparent visible={modalActive}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={closeModal}
          style={{ flex: 1, zIndex: 9 }}
        ></TouchableOpacity>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={closeModal}>
            <FontAwesome name="close" size={35} color={colors.gray["100"]} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity style={styles.actionConfirm}>
            <Text>Entendi</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
