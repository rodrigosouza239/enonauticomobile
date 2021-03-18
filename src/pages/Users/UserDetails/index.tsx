import React, { useState } from "react";
import {
  View,
  Alert,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import HeaderBackEdit from "../../../components/HeaderBackEdit";
import HeaderBack from "../../../components/HeaderBack";

import styles from "./styles";
import Backgroud from "../../../assets/backgroudmenu.png";
import Logo from "../../../assets/logo.png";

import { useAuth } from "../../../hooks/auth";

import api from '../../../service/axios'

function UserPerfil() {
  const route = useRoute();
  const userLogado = useAuth().user;
  const { navigate } = useNavigation();
  const { user }: any = route.params;

  const [cargo, setCargo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function loadUserData() {
    console.log(user);
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

  function handleDelete() {
    async function deletar() {
      await api.delete(`/users/${user.id}`);
      Alert.alert("", "Deletado com sucesso")
      navigate("Users");
    }

    Alert.alert("Deletar usuario", "Você quer mesmo apagar?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelado"),
      },
      { text: "Confirmar", onPress: () => deletar() },
    ]);
  }

  React.useEffect(() => {
    loadUserData();
  });

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >

        {!userLogado.master ? <HeaderBack/> :  <HeaderBackEdit onPress={() => navigate("UsersDataTwo")} route="UsersEdit" data={user} />}

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {!userLogado.master ? "Minhas informações" :  "Infomações do usuário"}
          </Text>
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
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Email:</Text>
            <TextInput
              value={email}
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Telefone:</Text>
            <TextInput
              value={phone}
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>
        </View>



        {!userLogado.master ? <></> :  (
           <View style={styles.containerButtons}>
            <TouchableOpacity
              onPress={() => navigate("RecoveryPassword", {id: user.id})}
              style={styles.ButtonChangePassword}
            >
              <Text style={styles.ButtonText}>Resgatar senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonDelete} onPress={handleDelete}>
              <Text style={styles.ButtonText}>Apagar conta</Text>
            </TouchableOpacity>
         </View>
        )}

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default UserPerfil;
