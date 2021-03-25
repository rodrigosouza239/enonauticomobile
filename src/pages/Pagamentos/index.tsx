import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Grupo59 from "../../assets/Grupo59.png";
import Codigo from "../../assets/Grupo160.png";

import HeaderBack from "../../components/HeaderBack";

function Pagamentos() {
  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.header}>
          <Image style={styles.headerImage} source={Grupo59} />
          <Text style={styles.headerText}>Pagamentos</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.contentItem}>
            <Text style={styles.textBold}>Banco: </Text>
            <Text style={styles.textItem}>Banco do Brasil</Text>
          </View>

          <View style={styles.contentItem1}>
            <Text style={styles.textBold}>Favorecido: </Text>
            <Text style={styles.textItem1}>Raimundo Émerson Mendes Gonçalves</Text>
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.textBold}>Pix: </Text>
            <Text style={styles.textItem}>646.702.602-00</Text>
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.textBold}>Agencia: </Text>
            <Text style={styles.textItem}>3372-3</Text>
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.textBold}>Conta: </Text>
            <Text style={styles.textItem}>49.030-0</Text>
          </View>

          <View style={styles.contentItem}>
            <Text style={styles.textBold}>CPF: </Text>
            <Text style={styles.textItem}>646.702.602-00</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default Pagamentos;
