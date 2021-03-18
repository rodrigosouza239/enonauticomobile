import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../../assets/logo.png";
import Grupo60 from "../../../assets/Grupo60.png";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import HeaderBack from "../../../components/HeaderBack";

function SchedulesClient() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();

  function hadleNavigateToSchedulesClientJt() {
    navigate("SchedulesClientJt");
  }

  function hadleNavigateToSchedulesClientLancha() {
    // navigate('SchedulesClientLancha')
    navigate("VesselSelect", { nextRoute: "Review" });
  }
  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />
        <View style={styles.mainPage}>
          <View style={styles.containerbox}>
            {/* <Image style={styles.containerboxImage} source={Grupo60} /> */}
            <Feather name="calendar" size={32} color="#FFD246"/>
            <Text style={styles.containerboxText}>Agendamentos</Text>
          </View>
          <View>
            <Text style={styles.mainText}>Escolha uma opção</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate("VesselSelect", { nextRoute: "SchedulesNew" })}
            style={styles.mainInputButton}
          >
            <Text style={styles.mainInputButtonText}>Novo agendamento</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("VesselSelect", { nextRoute: "Schedules" })}
            style={styles.mainInputButton}
          >
            <Text style={styles.mainInputButtonText}>
              Ver agendamentos
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default SchedulesClient;
