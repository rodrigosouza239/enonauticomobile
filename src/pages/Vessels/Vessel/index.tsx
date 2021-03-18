import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {RectButton} from "react-native-gesture-handler"
import { useNavigation, useRoute } from "@react-navigation/native";

import Backgroud from "../../../assets/backgroudmenu.png";
import HeaderBack from "../../../components/HeaderBack";
import HeaderBackEdit from "../../../components/HeaderBackEdit";
import styles from "./styles";
import Grupo56 from "../../../assets/Grupo56.png";
import Pasta from "../../../assets/Caminho46.png";
import Logo from "../../../assets/logo.png";

import { useAuth } from "../../../hooks/auth";


function Vessel() {
  const { user } = useAuth();

  const route: any = useRoute();
  const { vessel }: any = route.params;
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

  async function loadDataVessel() {


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

  async function navigateForCheckList(){
    if(jetski){
      return navigate("CheckJetskiList", { vessel:vessel })
    }else{
      return navigate("CheckList", { vessel:vessel })
    }
  }


  useEffect(() => {
    loadDataVessel();
  });

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        {!user.employee && !user.master ? <HeaderBack/> :  <HeaderBackEdit onPress={() => navigate("Vessels")} route="VesselEdit" data={vessel} />}

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
              editable={false}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Proprietário:</Text>
            <TextInput
              value={proprietario}
              editable={false}
              onChangeText={setProprietario}
              style={styles.fieldInputTextInputProprietario}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Marca:</Text>
            <TextInput
              value={marca}
              editable={false}
              onChangeText={setMarca}
              style={styles.fieldInputTextInputMarca}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Modelo:</Text>
            <TextInput
              value={modelo}
              editable={false}
              onChangeText={setModelo}
              style={styles.fieldInputTextInputModelo}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Ano:</Text>
            <TextInput
              value={ano}
              editable={false}
              onChangeText={setAno}
              style={styles.fieldInputTextInputAno}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Comprimento total:</Text>
            <TextInput
              editable={false}
              value={comprimentototal}
              onChangeText={setComprimentototal}
              style={styles.fieldInputTextInputComprimentoTotal}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Motor:</Text>
            <TextInput
              editable={false}
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
              editable={false}
              value={combustivel}
              onChangeText={setCombustivel}
              style={styles.fieldInputTextInputCapacidadeDeCombustivel}
            />
          </View>

          <View style={styles.mainpastas}>
            <RectButton style={styles.mainpastas} onPress={() => navigate("Damaged", { id: vessel.id })}>
              <Image source={Pasta} />
              <Text
                style={styles.mainpastasText}
              >
                Avarias
              </Text>
            </RectButton>

            <RectButton style={styles.mainpastas} onPress={() => navigate("Findings", { vessel:vessel, id: vessel.id })}>
              <Image source={Pasta} />
              <Text
                style={styles.mainpastasText}
              >
                Achados
              </Text>
            </RectButton>

            <RectButton style={styles.mainpastas} onPress={navigateForCheckList}>
              <Image source={Pasta} />
              <Text
                style={styles.mainpastasText}
              >
                CheckList
              </Text>
            </RectButton>
          </View>

          <View style={styles.footer}>
            <Image style={styles.footerImg} source={Logo} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
export default Vessel;
