import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import HeaderBack from "../../components/HeaderBack";
import styles from "./styles";

import Logo from "../../assets/logo.png";
import Backgroud from "../../assets/backgroudhome.png";

import api from '../../service/axios'

function PageSucessoPassword() {
  const route = useRoute()
  const { goBack } = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { id }: any = route.params;

  async function handleRecoveryPassword(){

    if (!password || !confirmPassword) {
      return Alert.alert(
        "Atenção",
        "Informe a nova senha para recuperação da conta."
      );
    }

    async function recovery() {
      try {
        const response = await api.post(`/user/${id}/changePassword`, {
          password,
          confirmPassword
        });
        goBack()
        Alert.alert("","Senha alterada com sucesso")
      } catch (error) {
        console.log(error.response);
        return Alert.alert("Algo deu errado, verifique os dados novamente!");
      }

      //   navigate("Users");
    }
    Alert.alert(
      "",
      "Você quer mesmo trocar a senha?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
        },
        { text: "Confirmar", onPress: () => recovery() },
      ]
    );
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack color="#333" />
        <KeyboardAvoidingView
          enabled={Platform.OS === "ios"}
          behavior="padding"
        >
          <View style={styles.main}>
            <Image style={styles.mainlogo} source={Logo} />
            <View style={styles.mainInput}>
              <TextInput
                style={styles.mainInputText}
                placeholder="Nova senha"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#535353"
              />
              <TextInput
                style={styles.mainInputText}
                placeholder="Confirma senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholderTextColor="#535353"
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10%",
            }}
          >
            <TouchableOpacity
              onPress={handleRecoveryPassword}
              style={styles.mainInputButton}
            >
              <Text style={styles.mainInputButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}

export default PageSucessoPassword;
