import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import CheckBox from "../../components/Forms/Checkbox";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Pasta from "../../assets/Caminho46.png";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Checklist() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();

  function hadleNavigateToCheckListPrev() {
    navigate("CheckListPrev");
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
          <CheckBox label="Óleo do Motor" />
          <CheckBox label="Óleo da Rabeta" />
          <CheckBox label="Óleo do Gerador" />
          <CheckBox label="Bujões" />
          <CheckBox label="Âncora" />
          <CheckBox label="Hélice" />
          <CheckBox label="Estrobo" />
          <CheckBox label="Tanque de Água" />
          <CheckBox label="Farol" />
          <CheckBox label="Luz de Navegação" />
          <CheckBox label="Documentação" />
          <CheckBox label="GPS" />
          <CheckBox label="Som" />
          <CheckBox label="Churrasqueira" />

          {/*  final */}
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <TouchableOpacity onPress={hadleNavigateToCheckListPrev}>
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

export default Checklist;
