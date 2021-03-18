import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../../service/axios";
import HeaderBack from "../../../components/HeaderBack";
import styles from "./styles";

import Backgroud from "../../../assets/backgroudmenu.png";
import Logo from "../../../assets/logo.png";
import Damaged from "..";
// import Pasta from "../../../assets/Caminho46.png";

function DamagedEdit() {
  const route = useRoute();
  const { damaged }: any = route.params;
  const { navigate, goBack } = useNavigation();
  const [obs, setObs] = useState("");

  function handleUpdate() {
    if (!obs) {
      alert("Preencha a descrição da avaria");
      return;
    }

    async function update() {
      await api.put(`/damaged/${damaged.id}`, {
        comments: obs,
      });
      goBack()
    }

    Alert.alert("Editar avaria", "Você quer mesmo salvar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confirmar", onPress: () => update() },
    ]);
  }

  function handleDelete() {
    async function deleteDamaged() {
      await api.delete(`/damaged/${damaged.id}`);
      navigate("DamagedData", {id: damaged.vesselId});
    }

    Alert.alert("Apagar avaria", "Você quer mesmo deletar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confirmar", onPress: () => deleteDamaged() },
    ]);
  }

  useEffect(() => {
    setObs(damaged.comments);
  }, []);


  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.titleBox}>
          <Text style={styles.titleText}>Editar Avaria</Text>
        </View>

        <View style={styles.header}>
          <Image style={styles.headerImg} source={Logo} />
        </View>

        <View style={styles.content}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Descrição"
              placeholderTextColor="#535353"
              value={obs}
              onChangeText={setObs}
              underlineColorAndroid="transparent"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.ButtonDelete} onPress={handleDelete}>
              <Text style={styles.ButtonText}>Apagar avaria</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleUpdate()}
              style={styles.ButtonChangePassword}
            >
              <Text style={styles.ButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default DamagedEdit;
