import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import api from "../../../service/axios";
import HeaderBack from "../../../components/HeaderBack";
import styles from "./styles";

import Backgroud from "../../../assets/backgroudmenu.png";
import Grupo56 from "../../../assets/Grupo56.png";

function Vessel() {
  const route = useRoute();
  const { user }: any = route.params;
  const { navigate } = useNavigation();

  const [vessel, setVessel]: any = useState([]);
  // const [userId, setUserId]: any = useState("");
  const [marginTop, setmarginTop] = useState("4%");
  const [jetski, setjetski]: any = useState("Lancha");
  const [name, setName] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [comprimentototal, setComprimentototal] = useState("");
  const [motor, setMotor] = useState("");
  const [combustivel, setCombustivel] = useState("");

  function handleVerifyFields() {
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

    function successSave(){
      console.log("CHEGOU AQUI")
      Alert.alert("Criar Embarcação", "Criada com sucesso", [
        { text: "Ok", onPress: () => navigate("VesselsData") },
      ]);
    }

    async function trySave(){
      let jetskiL = true;
      if (jetski === "Lancha") {
        jetskiL = false;
      }
      try {
        const response = await api.post('/vessels', {
          jetski: jetskiL,
          userId: user.id,
          name,
          proprietario: user.name,
          marca,
          modelo,
          ano,
          comprimentototal,
          motor,
          combustivel
        })

      } catch (error) {
        console.log(error)
        Alert.alert('Algo deu errado', 'Tente novamente mais tarde')
        return false;
      }
    }

    async function create() {
      const sucesso = trySave()
      console.log("MEstrE")
      if(!sucesso){
        return
      }
      successSave()
    }

    Alert.alert("Criar Embarcação", "Você quer mesmo salvar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confirmar", onPress: () => create() },
    ]);
  }

  function Focus() {
    setmarginTop("18%");
  }

  function Blur() {
    setmarginTop("2%");
  }

  return (
    <>
      {/* <KeyboardAvoidingView style={styles.container} enabled> */}
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.containerbox}>
          <Text style={styles.containerboxText}>Criar nova embarcação</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            marginTop:80,
          }}
        >
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Tipo de embarcação:</Text>

            <View style={styles.fieldInputTextInputProprietario}>
            <TextInput
              value={jetski}
              placeholder="Lancha ou Jetski"
              onChangeText={setjetski}
              style={styles.fieldInputTextInputNome}
            />
            </View>
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Nome:</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.fieldInputTextInputNome}
              onFocus={Focus}
              onBlur={Blur}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Marca:</Text>
            <TextInput
              value={marca}
              onChangeText={setMarca}
              style={styles.fieldInputTextInputMarca}
              onBlur={() => Blur()}
              onFocus={() => Focus()}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Modelo:</Text>
            <TextInput
              value={modelo}
              onChangeText={setModelo}
              style={styles.fieldInputTextInputModelo}
              onBlur={() => Blur()}
              onFocus={() => Focus()}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Ano:</Text>
            <TextInput
              value={ano}
              onChangeText={setAno}
              style={styles.fieldInputTextInputAno}
              onBlur={() => Blur()}
              onFocus={() => Focus()}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Comprimento total:</Text>
            <TextInput
              value={comprimentototal}
              onChangeText={setComprimentototal}
              style={styles.fieldInputTextInputComprimentoTotal}
              onBlur={() => Blur()}
              onFocus={() => Focus()}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Hora Motor:</Text>
            <TextInput
              value={motor}
              onChangeText={setMotor}
              style={styles.fieldInputTextInputMotor}
              onBlur={() => Blur()}
              onFocus={() => Focus()}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>
              Combustível:
            </Text>
            <TextInput
              value={combustivel}
              onChangeText={setCombustivel}
              style={styles.fieldInputTextInputCapacidadeDeCombustivel}
              onBlur={() => Blur()}
              onFocus={() => Focus()}
            />
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={handleVerifyFields} style={styles.ButtonSave}>
              <Text style={styles.ButtonText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}
export default Vessel;
