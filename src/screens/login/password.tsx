import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import NumbersKeyBoard from "@/componentes/numbersKeyBoard";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/utils/colors";
import { ReactElement, useState } from "react";
import { ViewDefault } from "@/componentes/ViewDefault/ViewDefault";
import { passwordFields } from "@/utils/passwordField";

type KeyboardTypes = {
  type: "label" | "action";
  label: number | "delete";
};

export default function Password() {
  const [statePass, setStatePass] = useState<string[]>([]);
  console.log(statePass);
  const arrayPassword = new Array(3);
  const arrayNumber: KeyboardTypes[] = [
    { type: "label", label: 1 },
    { type: "label", label: 2 },
    { type: "label", label: 3 },
    { type: "label", label: 4 },
    { type: "label", label: 5 },
    { type: "label", label: 6 },
    { type: "label", label: 7 },
    { type: "label", label: 8 },
    { type: "label", label: 9 },
    { type: "label", label: 0 },
    { type: "action", label: "delete" },
  ];

  function renderitem({ item }: { item: KeyboardTypes }) {
    if (item.type === "label") {
      return (
        <NumbersKeyBoard
          statePass={statePass}
          setStatePass={setStatePass}
          key={item.label}
          number={item.label as number}
        />
      );
    }

    if (item.type === "action") {
      return (
        <TouchableOpacity key={item.label}>
          <Feather name="delete" color={colors.brand} size={30} />
        </TouchableOpacity>
      );
    }
    return null;
  }

  function selectedButton() {
    passwordFields.map(({ id }, fieldSelected) => {
      statePass.map(({}, passwordSelected) => {
        if (fieldSelected === passwordSelected) {
          return (
            <View key={id} style={styles.fieldpass}>
              b
            </View>
          );
        }
      });

      return (
        <View key={id} style={styles.fieldpass}>
          ff
        </View>
      );
    });
    return <Text>Value</Text>;
  }

  return (
    <ViewDefault style={styles.containerPassword}>
      <View style={styles.header}>
        <Feather
          name="user"
          size={70}
          style={styles.iconUser}
          color={colors.brand}
        />
        <Text style={styles.paragraph}>Digite sua senha para acessar</Text>

        <View style={styles.BoxPassword}>{selectedButton()}</View>

        <FlatList
          data={arrayNumber}
          numColumns={3}
          keyExtractor={(item) => item.label.toString()}
          renderItem={renderitem}
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
      </View>
      <Button title="zerar valor" onPress={() => setStatePass([])}></Button>
    </ViewDefault>
  );
}
