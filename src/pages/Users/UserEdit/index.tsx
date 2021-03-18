import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import HeaderBack from "../../../components/HeaderBack";
import styles from "./styles";
import Backgroud from "../../../assets/backgroudmenu.png";
import Logo from "../../../assets/logo.png";
import api from "../../../service/axios";

function UserPerfil() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { user }: any = route.params;

  const [cargo, setCargo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function loadUserData() {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    if (!user.employee && user.master) {
      setCargo("Administrator");
    }

    if (user.employee && !user.master) {
      setCargo("Funcionario");
    }

    if (!user.employee && !user.master) {
      setCargo("Cliente");
    }
  }

  async function handleSave(){
    try {
      const response = await api.put(`/users/${user.id}`, {name, email, phone});
      navigate("UsersDetailsData", {user: response.data})
    } catch (error) {
      console.log(error)
      Alert.alert('Algo deu errado', 'Tente novamente mais tarde')
    }
  }

  function handleDelete() {
    async function deletar() {
      await api.delete(`/users/${user.id}`);
      navigate("UsersData");
    }

    Alert.alert("Deletar Usuario", "Você quer mesmo apagar?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelado"),
      },
      { text: "Confirmar", onPress: () => deletar() },
    ]);
  }


  React.useEffect(() => {
    loadUserData();
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Editar usuário</Text>
        </View>

        <View style={styles.mainPageForm}>
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Cargo:</Text>
            <TextInput
              value={cargo}
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Nome:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              autoCorrect={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Email:</Text>
            <TextInput
              value={email}
              autoCapitalize="none"
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Telefone:</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              keyboardType="number-pad"
              style={styles.fieldInputTextInputNome}
            />
          </View>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={handleSave}
            style={styles.ButtonChangePassword}
          >
            <Text style={styles.ButtonText}>Salvar dados</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default UserPerfil;
