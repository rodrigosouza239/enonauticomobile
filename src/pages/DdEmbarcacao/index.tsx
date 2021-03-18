import React, { useState, useEffect } from "react";
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
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import Api from "../../service/auth";

import Backgroud from "../../assets/backgroudmenu.png";
import HeaderBackEdit from "../../components/HeaderBackEdit";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Grupo56 from "../../assets/Grupo56.png";
import Pasta from "../../assets/Caminho46.png";

function DdEmbarcacao() {
  const navigation = useNavigation();
  const route = useRoute();
  const { navigate } = useNavigation();

  const [jetski, setjetski] = useState("");
  const [name, setName] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [comprimentototal, setComprimentototal] = useState("");
  const [motor, setMotor] = useState("");
  const [combustivel, setCombustivel] = useState("");

  function hadleNavigateToAvarias() {
    navigate("Avarias");
  }
  function hadleNavigateToAchadosPerdidos() {
    navigate("AchadosPedidos");
  }
  function hadleNavigateToCheckList() {
    navigate("CheckList");
  }
  function hadleNavigateToUserPerfil() {
    navigate("UserPerfil");
  }

  async function loadDataVessel() {
    const { vessel }: any = route.params;
    setjetski(vessel.jetski);
    setName(vessel.name);
    setProprietario(vessel.proprietario);
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

  const hadleNavigateToSeja = async () => {
    if (
      name != "" &&
      proprietario != "" &&
      marca != "" &&
      modelo != "" &&
      ano != "" &&
      comprimentototal != "" &&
      motor != "" &&
      combustivel != ""
    ) {
      let json = await Api.embarcação(
        name,
        proprietario,
        marca,
        modelo,
        ano,
        comprimentototal,
        motor,
        combustivel
      );
      if ("") {
        navigate("Home");
      } else {
        alert("E-mail ou senha errados");
      }
    } else {
      alert("Preencha os campos");
    }
  };

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBackEdit route="Home" />
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
            <Text style={styles.fieldInputText}>Proprietário:</Text>
            <TextInput
              value={proprietario}
              onChangeText={setProprietario}
              style={styles.fieldInputTextInputProprietario}
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

          <View style={styles.mainpastas}>
            <View style={styles.mainpastas}>
              <Image source={Pasta} />
              <Text
                onPress={hadleNavigateToAvarias}
                style={styles.mainpastasText}
              >
                Avarias
              </Text>
            </View>

            <View style={styles.mainpastas}>
              <Image source={Pasta} />
              <Text
                onPress={hadleNavigateToAchadosPerdidos}
                style={styles.mainpastasText}
              >
                Achados
              </Text>
            </View>

            <View style={styles.mainpastas}>
              <Image source={Pasta} />
              <Text
                onPress={hadleNavigateToCheckList}
                style={styles.mainpastasText}
              >
                CheckList
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={hadleNavigateToSeja}
            style={styles.containerButton}
          >
            <Text style={styles.containerButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}
export default DdEmbarcacao;
