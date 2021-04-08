import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../service/axios";
import InputForm from "../../components/Input/InputForm";
import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Grupo60 from "../../assets/Grupo60.png";
import HeaderBack from "../../components/HeaderBack";

function Review() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { vessel }: any = route.params;

  function handleCustom(value: string) {
    setSelectedDateLast(value);
  }

  function handleCustom1(value: string) {
    setSelectedDateNext(value);
  }

  const [hora, setHora] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const [tecnico, setTecnico] = useState("");

  const [selectedDateLast, setSelectedDateLast] = useState("");
  const [selectedDateNext, setSelectedDateNext] = useState("");

  async function hadleNavigateToSalvar() {
    const data = {
      vesselId: vessel.id,
      lastReview: String(selectedDateLast),
      engineHour: hora,
      firm: responsavel,
      nextReview: String(selectedDateNext),
      expert: tecnico,
    };

    try {
      const response = await api.post("/reviews", data);
      navigate("Revisao");
      Alert.alert("", "Revisão criada com sucesso");
    } catch (err) {
      console.log(err.response);
      Alert.alert("", "Erro no cadastro, tente novamente.");
    }
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.containerbox}>
          <Image source={Grupo60} />
          <Text style={styles.containerboxText}>Revisão</Text>
        </View>

        <View style={styles.main}>
          <Text style={styles.mainInputText}>Data da última revisão:</Text>
          <InputForm
            maxLength={10}
            keyboardType="number-pad"
            value={selectedDateLast}
            style={styles.mainInput4}
            mask="maskDate"
            inputMaskChange={(text: string) => handleCustom(text)}
          />
        </View>
        <View style={styles.main}>
          <TextInput
            value={hora}
            placeholder="Hora/Motor"
            placeholderTextColor="#000"
            onChangeText={setHora}
            style={styles.mainInput3}
          />
        </View>
        <View style={styles.main}>
          <TextInput
            value={responsavel}
            placeholder="Empresa Responsável"
            placeholderTextColor="#000"
            onChangeText={setResponsavel}
            style={styles.mainInput4}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.mainInputText}>Próxima Revisão:</Text>
          <InputForm
            maxLength={10}
            keyboardType="number-pad"
            value={selectedDateNext}
            style={styles.mainInput4}
            mask="maskDate"
            inputMaskChange={(text: string) => handleCustom1(text)}
          />
        </View>
        <View style={styles.main}>
          <TextInput
            value={tecnico}
            placeholder="Técnico"
            placeholderTextColor="#000"
            onChangeText={setTecnico}
            style={styles.mainInput5}
          />
        </View>

        <View style={styles.mainpastas}>
          <TouchableOpacity
            onPress={hadleNavigateToSalvar}
            style={styles.mainInputButton}
          >
            <Text style={styles.mainInputButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default Review;
