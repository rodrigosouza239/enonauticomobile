import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import CheckBox from "../../../components/Forms/Checkbox";
import Constants from "expo-constants";

import Backgroud from "../../../assets/backgroudmenu.png";
import Logo from "../../../assets/logo.png";
import Pasta from "../../../assets/Caminho46.png";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function ChecklistNext() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();

  function hadleNavigateToCheckListNext4() {
    navigate("CheckListNext4");
  }
  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <View style={styles.containerBack}>
          <BorderlessButton onPress={navigation.goBack}>
            <Feather name="arrow-left" size={24} color="#FFD246" />
          </BorderlessButton>
          <BorderlessButton onPress={navigation.goBack}>
            <Feather name="menu" size={24} color="#FFD246" />
          </BorderlessButton>
        </View>
        <View style={styles.mainPage}>
          <View style={styles.containerbox}>
            <Image style={styles.containerboxImage} source={Pasta} />
            <Text style={styles.containerboxText}>CheckList</Text>
          </View>
          <View style={styles.icon}>
            <Feather size={17} color="#FA5A4C" name="x" />
            <Feather size={17} color="#63E669" name="check" />
            <Text style={styles.label}>Itens</Text>
          </View>
          {/* CheckBox */}
          <CheckBox label="Luz de Cortesia" />
          <CheckBox label="Antena" />
          <CheckBox label="Mastro" />
          <CheckBox label="Frigobar" />
          <CheckBox label="Buzina" />
          <CheckBox label="Guincho Elétrico" />
          <CheckBox label="Chave Geral" />
          <CheckBox label="Inversor" />
          <CheckBox label="Para-brisa" />
          <CheckBox label="Portinha da Popa" />
          <CheckBox label="Gel Coat" />
          <CheckBox label="Capa de Proteção" />
          <CheckBox label="Capota" />
          <CheckBox label="Fechamento de Capota" />
          {/*  final */}
        </View>

        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <TouchableOpacity onPress={hadleNavigateToCheckListNext4}>
            <Feather size={30} color="#fff" name="arrow-right" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  containerBack: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerbox: {
    marginBottom: 30,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerboxImage: {},
  containerboxText: {
    fontSize: 23,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },
  mainPage: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  mainText: {
    fontSize: 18,
    color: "#FFD246",
    marginTop: 40,
    marginBottom: 10,
    fontWeight: "700",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerImg: {
    width: 133,
    height: 70,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    margin: 8,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    left: 5,
  },
});

export default ChecklistNext;
