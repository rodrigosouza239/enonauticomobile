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

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Grupo60 from "../../assets/Grupo60.png";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import HeaderBack from "../../components/HeaderBack";

function Revisao() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();

  function hadleNavigateToRevisaoJt() {
    navigate("RevisaoJt");
  }

  function hadleNavigateToRevisaoLancha() {
    // navigate('RevisaoLancha')
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
            <Image style={styles.containerboxImage} source={Grupo60} />
            <Text style={styles.containerboxText}>Revisão</Text>
          </View>
          <View>
            <Text style={styles.mainText}>Escolha uma opção</Text>
          </View>
          <TouchableOpacity
            onPress={hadleNavigateToRevisaoLancha}
            style={styles.mainInputButton}
          >
            <Text style={styles.mainInputButtonText}>Criar nova revisão</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("VesselSelect", { nextRoute: "AllReview" })}
            style={styles.mainInputButton}
          >
            <Text style={styles.mainInputButtonText}>
              Procurar por revisões
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

export default Revisao;
