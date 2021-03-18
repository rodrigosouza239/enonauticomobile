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

import api from "../../../service/axios";
import HeaderBack from "../../../components/HeaderBack";
import styles from "./styles";

import Backgroud from "../../../assets/backgroudmenu.png";
import Grupo56 from "../../../assets/Grupo56.png";

function Vessel() {
  const route = useRoute();
  const { finding }: any = route.params;
  const { navigate, goBack } = useNavigation();

  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [rg, setRg] = useState("");
  const [delivered, setDelivered] = useState(false);

  const [jetski, setjetski] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [comprimentototal, setComprimentototal] = useState("");
  const [motor, setMotor] = useState("");
  const [combustivel, setCombustivel] = useState("");

    function handleDelete() {
      async function deletar() {
        await api.delete(`/findings/${finding.id}`);
        navigate("FindingsData", {id: finding.vesselId});
      }

      Alert.alert("Deletar Embarcação", "Você quer mesmo apagar?", [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelado"),
        },
        { text: "Confirmar", onPress: () => deletar() },
      ]);
    }

  function handleUpdate() {
    if ((!rg && name) || (!name && rg)) {
      Alert.alert(
        "Atenção",
        "Se o item foi entregue preencha os campos Nome e Documento!"
      );
      return;
    }

    async function update() {
      await api.put(`/findings/${finding.id}`, {
        name,
        rg,
        comments,
      });
      // navigate("FindingsData", {id: finding.vesselId});
      goBack()
    }

    async function handleDelivered() {
      await api.put(`/findings/${finding.id}/delivered`, {
        name,
        rg,
      });
    }

    if (!delivered && rg) {
      handleDelivered();
    }

    Alert.alert("Editar Embarcação", "Você quer mesmo salvar esses dados?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => {
          if (comments) {
            update();
          }
        },
      },
    ]);
  }

  async function loadDataFinding() {
    if (finding.delivered) {
      setDelivered(true);
    }
    setComments(finding.comments);
    setName(finding.name);
    setRg(finding.rg);
  }

  useEffect(() => {
    loadDataFinding();
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
          <Text style={styles.containerboxText}>Objeto encontrado</Text>
        </View>

        <View style={styles.forms}>
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Objeto:</Text>
            <TextInput
              value={comments}
              onChangeText={setComments}
              style={styles.fieldInputTextInputObjeto}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Entregue para:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Com o Rg:</Text>
            <TextInput
              value={rg}
              onChangeText={setRg}
              keyboardType="numeric"
              style={styles.fieldInputTextInputRg}
            />
          </View>

          <View style={styles.containerButtons}>
            <TouchableOpacity
                onPress={handleDelete}
              style={styles.ButtonDelete}
            >
              <Text style={styles.ButtonText}>Apagar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleUpdate} style={styles.ButtonSave}>
              <Text style={styles.ButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
export default Vessel;
