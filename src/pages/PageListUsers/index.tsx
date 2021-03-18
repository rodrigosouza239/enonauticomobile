import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import api from "../../service/axios";

import HeaderBack from "../../components/HeaderBack";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";

import Logo from "../../assets/logo.png";
import Grupo56 from "../../assets/Grupo56.png";
import Pasta from "../../assets/Caminho46.png";

function PageListUsers() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();
  const [users, setUsers]: any = useState([]);

  function hadleNavigateToUserPerfil() {
    navigate("UserPerfil");
  }

  async function loadUsers() {
    const response = await api.get("/users");
    const { allClients, allEmployees } = response.data;
    const allUsers: any = [];

    for (const u in allEmployees) {
      if (Object.prototype.hasOwnProperty.call(allEmployees, u)) {
        const element = allEmployees[u];
        allUsers.push(element);
      }
    }

    for (const usuario in allClients) {
      if (Object.prototype.hasOwnProperty.call(allClients, usuario)) {
        const element = allClients[usuario];
        allUsers.push(element);
      }
    }

    setUsers(allUsers);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.boxTitle}>
          <Text style={styles.title}>Todos os Usuarios </Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={users}
            keyExtractor={(user) => user.id}
            renderItem={({ item: user }) => (
              <View style={styles.boxItem}>
                <View style={styles.contentItem}>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>NOME:</Text> {user.name}
                  </Text>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>EMAIL:</Text> {user.email}
                  </Text>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>TELEFONE:</Text> {user.phone}
                  </Text>
                </View>
                <View style={styles.tagBox}>
                  <Text style={styles.tagText}>
                    {user.employee ? "FUNCIONARIO" : "CLIENTE"}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.containerButton}>
            <Feather name="plus" size={18} color="#FFF" />
            <Text style={styles.containerButtonText}>
              CADASTRAR NOVO USUARIO
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

export default PageListUsers;
