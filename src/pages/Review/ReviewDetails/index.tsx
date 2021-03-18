import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground, TextInput } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { useAuth } from "../../../hooks/auth";

import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../../assets/logo.png";
import Grupo60 from "../../../assets/Grupo60.png";
import HeaderBackEdit from "../../../components/HeaderBackEdit";
import HeaderBack from "../../../components/HeaderBack";

function RevisaoJt() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { review }: any = route.params;
  const { user } = useAuth();

  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [revisao, setRevisao] = useState("");
  const [tecnico, setTecnico] = useState("");

  function handleDate(timeZone: any) {
    const year = timeZone.substring(0, 4);
    const mount = timeZone.substring(5, 7);
    const day = timeZone.substring(8, 10);

    const time = day + "/" + mount + "/" + year;
    return time;
  }

  useEffect(() => {
    console.log(review.lastReview)
    console.log(typeof review.lastReview)
    setDate(handleDate(String(review.lastReview)));
    setHora(review.engineHour);
    setResponsavel(review.firm);
    setRevisao(handleDate(String(review.nextReview)));
    setTecnico(review.expert);
  });

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        {!user.employee && !user.master ? <HeaderBack/> :  <HeaderBackEdit route="ReviewEdit" data={review} />}

        <View style={styles.containerbox}>
          <Image source={Grupo60} />
          <Text style={styles.containerboxText}>Revisão</Text>
        </View>

        <View style={styles.main}>
          <Text style={styles.mainInputText}>Data da última revisão:</Text>
          <TextInput
            value={date}
            editable={false}
            onChangeText={setDate}
            style={styles.mainInput2}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.mainInputText}>Hora/Motor:</Text>
          <TextInput
            value={hora}
            editable={false}
            onChangeText={setHora}
            style={styles.mainInput3}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.mainInputText}>Empresa Responsável:</Text>
          <TextInput
            value={responsavel}
            editable={false}
            onChangeText={setResponsavel}
            style={styles.mainInput4}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.mainInputText}>Próxima Revisão:</Text>
          <TextInput
            value={revisao}
            editable={false}
            onChangeText={setRevisao}
            style={styles.mainInput}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.mainInputText}>Técnico:</Text>
          <TextInput
            value={tecnico}
            editable={false}
            onChangeText={setTecnico}
            style={styles.mainInput5}
          />
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default RevisaoJt;
