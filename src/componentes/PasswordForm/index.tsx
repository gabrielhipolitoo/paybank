import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  TouchableOpacityProperties,
  View,
} from "react-native";
import { styles } from "./styles";
import NumbersKeyBoard from "../numbersKeyBoard";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/utils/colors";
import { ReactElement } from "react";

type KeyboradTypes = {
  type: "label" | "action";
  label: number | "delte";
};

export default function PasswordForm() {

  const arrayNumber: number[] | ReactElement[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    1,
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name="user"
          size={70}
          style={styles.iconUser}
          color={colors.brand}
        />
        <Text style={styles.paragraph}>Digite sua senha para acessar</Text>

        <FlatList
          data={arrayNumber}
          numColumns={3}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <NumbersKeyBoard number={item} />}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "center",
            gap: 50,
            rowGap: 20,
            marginBottom: 40,
            alignItems: "center",
          }}
        />
        <Feather />
        <TouchableOpacity>
          <Feather name="delete" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
