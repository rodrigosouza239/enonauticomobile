import React, { Component, useState } from "react";
import {
  View,
  Alert,
  ActivityIndicator,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,

} from "react-native";


import Logo from "../../assets/logo.png";
import Backgroud from "../../assets/backgroudhome.png";
import styles from "./styles";

import { useAuth } from "../../hooks/auth";


function Login() {


  const { signIn, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    console.log(email, password);
    setLoading(true);
    if (email && password) {
      try {
        await signIn({ email, password });
      } catch (error) {
        console.log(error.response.data)
        switch (error.response.data.error) {
          case "Usuario não já existe!":
            Alert.alert("Verifique as suas credencias", "Esse email não esta cadastrado")
            break;

          case "Senha ou Usuario errado, tente novamente":
            Alert.alert("Verifique as suas credencias", "Senha incorreta")
            break;
          default:
            Alert.alert("Verifique as suas credenciais", "Algo deu errado, tente novamente")
            break;
        }
      }
    } else {
      alert("Preencha os campos");
    }

    setLoading(false);
  };


  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <KeyboardAvoidingView
          enabled={Platform.OS === "ios"}
          behavior="padding"
        >
          <View style={styles.main}>
            <Image style={styles.mainlogo} source={Logo} />
            <View style={styles.mainInput}>
              <TextInput
                style={styles.mainInputText}
                placeholder="Usuário/E-mail"
                placeholderTextColor="#535353"
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.mainInputText}
                placeholder="Senha"
                placeholderTextColor="#535353"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                maxLength={6}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => handleLogin()}
                style={styles.mainInputButton}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#000" />
                ) : (
                  <Text style={styles.mainInputButtonText}>Entrar</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Desenvolvido por{" "}
            <Text style={styles.footerTextBold}>AgenciaRC</Text>
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

export default Login;
