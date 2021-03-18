import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function headerBackEdit({ route, data, onPress }: any) {
  const navigation = useNavigation();

  function handleNavigateEdit() {
    console.log(data);
    if(data.email){
      navigation.navigate(route, { user: data });
    }
    if (data.modelo) {
      navigation.navigate(route, { vessel: data });
    }
    if (data.expert) {
      navigation.navigate(route, { review: data });
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress ? onPress : navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#FFD246" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigateEdit}>
        <Feather name="edit-2" size={20} color="#FFD246" />
      </TouchableOpacity>
    </View>
  );
}
