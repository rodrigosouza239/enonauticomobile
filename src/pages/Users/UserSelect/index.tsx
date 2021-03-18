import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../../service/axios";

import HeaderBack from "../../../components/HeaderBack";

import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";

function Users() {
  const route = useRoute();
  const { nextRoute }: any = route.params;

  const { navigate } = useNavigation();
  const [users, setUsers]: any = useState([]);

  async function loadUsers() {
    const response = await api.get("/users");
    const { allClients, allEmployees } = response.data;
    const allUsers: any = [];

    for (const u in allEmployees) {
      if (Object.prototype.hasOwnProperty.call(allEmployees, u)) {
        const element = allEmployees[u];
        // allUsers.push(element);
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

  function handleNavigateToVessel(user: any) {
    navigate(nextRoute, { user });
  }

  useEffect(() => {
    loadUsers();
  });

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.boxTitle}>
          <Text style={styles.title}>Selecione o Cliente</Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={users}
            keyExtractor={(user) => String(user.id)}
            renderItem={({ item: user }) => (
              <TouchableOpacity
                style={styles.boxItem}
                onPress={() => handleNavigateToVessel(user)}
              >
                {user.employee ? null : (
                  <>
                    <View style={styles.contentItem}>
                      <Text style={styles.textItem}>
                        <Text style={styles.textBold}>NOME:</Text> {user.name}
                      </Text>
                      <Text style={styles.textItem}>
                        <Text style={styles.textBold}>EMAIL:</Text> {user.email}
                      </Text>
                      <Text style={styles.textItem}>
                        <Text style={styles.textBold}>TELEFONE:</Text>{" "}
                        {user.phone}
                      </Text>
                    </View>
                    <View style={styles.tagBox}>
                      <Text style={styles.tagText}>
                        {user.employee ? "FUNCIONARIO" : "CLIENTE"}
                      </Text>
                    </View>
                  </>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </>
  );
}

export default Users;
