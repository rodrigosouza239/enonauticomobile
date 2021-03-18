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

import { useAuth } from "../../../hooks/auth";

function Vessel() {
  const route = useRoute();
  const { user } = useAuth();
  const { vessel }: any = route.params;
  const { navigate } = useNavigation();

  const [jetski, setjetski] = useState("");
  const [name, setName] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [comprimentototal, setComprimentototal] = useState("");
  const [motor, setMotor] = useState("");
  const [combustivel, setCombustivel] = useState("");

  function handleDelete() {
    async function deletar() {
      await api.delete(`/vessels/${vessel.id}`);
      navigate("VesselsData");
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
    if (
      !name ||
      !marca ||
      !modelo ||
      !ano ||
      !comprimentototal ||
      !motor ||
      !combustivel
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    async function update() {
      await api.put(`/vessels/${vessel.id}/supply`, {
        motor,
        combustivel,
      })
      const data = await api.put(`/vessels/${vessel.id}`, {
        name,
        marca,
        modelo,
        ano,
        comprimentototal,
      });
      navigate("VesselData", {vessel: data.data});
    }

    Alert.alert("Editar Embarcação", "Você quer mesmo salvar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confimar", onPress: () => update() },
    ]);
  }

  async function loadDataVessel() {
    setjetski(vessel.jetski);
    setName(vessel.name);
    setMarca(vessel.marca);
    setModelo(vessel.modelo);
    setAno(vessel.ano);
    setComprimentototal(vessel.comprimentototal);
    setMotor(vessel.motor);
    setCombustivel(vessel.combustivel);
  }

  useEffect(() => {
    loadDataVessel();
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
          <Image source={Grupo56} />
          <Text style={styles.containerboxText}>
            Dados {jetski ? "do Jetski" : "da Lancha"}
          </Text>
        </View>

        <View style={styles.forms}>
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Nome:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Marca:</Text>
            <TextInput
              value={marca}
              onChangeText={setMarca}
              style={styles.fieldInputTextInputMarca}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Modelo:</Text>
            <TextInput
              value={modelo}
              onChangeText={setModelo}
              style={styles.fieldInputTextInputModelo}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Ano:</Text>
            <TextInput
              value={ano}
              onChangeText={setAno}
              style={styles.fieldInputTextInputAno}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Comprimento total:</Text>
            <TextInput
              value={comprimentototal}
              onChangeText={setComprimentototal}
              style={styles.fieldInputTextInputComprimentoTotal}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Motor:</Text>
            <TextInput
              value={motor}
              onChangeText={setMotor}
              style={styles.fieldInputTextInputMotor}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>
              Capacidade de Combustível:
            </Text>
            <TextInput
              value={combustivel}
              onChangeText={setCombustivel}
              style={styles.fieldInputTextInputCapacidadeDeCombustivel}
            />
          </View>

          {!user.master ? (
            <View style={styles.containerButtonsOnEmplyee}>
              <TouchableOpacity onPress={handleUpdate} style={styles.ButtonSave}>
                <Text style={styles.ButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          ) : (
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
          )}


        </View>
      </ImageBackground>
    </>
  );
}
export default Vessel;
