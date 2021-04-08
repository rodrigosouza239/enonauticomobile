import React, { useState, useEffect } from "react";
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
import DateForm from "../../../components/DateForm/index.android";
import InputForm from "../../../components/Input";
import api from "../../../service/axios";

import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../../assets/logo.png";
import Grupo60 from "../../../assets/Grupo60.png";
import HeaderBack from "../../../components/HeaderBack";

function RevisaoJt() {
  const route = useRoute();
  const { navigate } = useNavigation();

  const { review }: any = route.params;
  const [hora, setHora] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [tecnico, setTecnico] = useState("");

  const [selectedDateLast, setSelectedDateLast] = useState("");
  const [selectedDateNext, setSelectedDateNext] = useState("");

  function handleCustom(value: string) {
    setSelectedDateLast(value);
  }

  function handleCustom1(value: string) {
    setSelectedDateNext(value);
  }

  async function handleUpdateDataReview() {
    console.log("ME DIZ SE CHEGOU AQUI");
    if (!tecnico || !responsavel || !hora) {
      alert("Preencha todos os campos por favor");
      return;
    }

    console.log("date:", selectedDateLast);

    async function updateData() {
      const data = {
        lastReview: selectedDateLast,
        engineHour: hora,
        firm: responsavel,
        nextReview: selectedDateNext,
        expert: tecnico,
      };

      try {
        const response = await api.put(`/reviews/${review.id}`, data);
        navigate("ReviewDetails", { review: data });
      } catch (err) {
        console.log(err.response);
        alert("Erro na edição, tente novamente.");
      }
    }

    Alert.alert(
      "Editar Revisão",
      "Você quer mesmo editar essa revisão com esses novos dados?",
      [
        {
          text: "Cancelar",
        },
        // { text: "Confirmar", onPress: () => updateData() },
      ]
    );
  }

  async function handleDeleteDataReview() {
    async function deleteData() {
      try {
        const response = await api.delete(`/reviews/${review.id}`);
        navigate("Revisao");
      } catch (err) {
        console.log(err.response);
        alert("Erro em apagar, tente novamente.");
      }
    }

    Alert.alert("Apagar Revisão", "Você quer mesmo apagar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confimar", onPress: () => deleteData() },
    ]);
  }

  useEffect(() => {
    setSelectedDateLast(review.lastReview);
    setHora(review.engineHour);
    setResponsavel(review.firm);
    setSelectedDateNext(review.nextReview);
    setTecnico(review.expert);
  }, []);

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
          {/* <TextInput
            value={date}
            onChangeText={setDate}
            style={styles.mainInput2}
          /> */}
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
          <Text style={styles.mainInputText}>Hora/Motor:</Text>
          <TextInput
            value={hora}
            onChangeText={setHora}
            style={styles.mainInput3}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.mainInputText}>Empresa Responsável:</Text>
          <TextInput
            value={responsavel}
            onChangeText={setResponsavel}
            style={styles.mainInput4}
          />
        </View>
        <View style={styles.main}>
          <Text style={styles.mainInputText}>Próxima Revisão:</Text>
          {/* <TextInput
            value={revisao}
            onChangeText={setRevisao}
            style={styles.mainInput}
          /> */}
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
          <Text style={styles.mainInputText}>Técnico:</Text>
          <TextInput
            value={tecnico}
            onChangeText={setTecnico}
            style={styles.mainInput5}
          />
        </View>

        <View style={styles.mainpastas}>
          <TouchableOpacity
            onPress={handleDeleteDataReview}
            style={styles.ButtonDelete}
          >
            <Text style={styles.footerTextBold}>Apagar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleUpdateDataReview}
            style={styles.ButtonSave}
          >
            <Text style={styles.footerTextBold}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default RevisaoJt;
