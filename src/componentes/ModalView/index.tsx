import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ModalProps,
} from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/utils/colors";
import { useState } from "react";
type PropsModalView = ModalProps & {
  text: string;
  title: string | "" ;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalView({
  text,
  title,
  setActiveModal,
  ...rest
}: PropsModalView) {
  const [activeModal, setModalActive] = useState(false);

  function closeModal() {
    setActiveModal(false);
  }

  return (
    <Modal style={styles.container} {...rest}>
      <TouchableOpacity
        
        onPress={closeModal}
        style={{ flex: 1, zIndex: 9 }}
      ></TouchableOpacity>

      <View style={styles.modalContent}>

        <TouchableOpacity onPress={closeModal}>
          <FontAwesome name="close" size={35} color={colors.brand} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>

        <TouchableOpacity onPress={closeModal} style={styles.actionConfirm}>
          <Text style={styles.textConfirm}>Entendi</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  );
}
