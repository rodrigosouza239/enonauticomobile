import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { parseISO, isBefore, isAfter } from "date-fns";
import DatePicker from 'react-native-datepicker'
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from 'moment';
import api from "../../service/axios";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Grupo60 from "../../assets/Grupo60.png";
import HeaderBack from "../../components/HeaderBack";

function Review() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { vessel }: any = route.params;

  const FORMATS = {
    'date': 'DD-MM-YYYY',
    'datetime': 'YYYY-MM-DD HH:mm',
    'time': 'HH:mm'
  };

  const [hora, setHora] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const [tecnico, setTecnico] = useState("");

  const [selectedDateLast, setSelectedDateLast] = useState(new Date());
  const [selectedDateNext, setSelectedDateNext] = useState(new Date());

  async function hadleNavigateToSalvar(){
    const data = {
      vesselId: vessel.id,
      lastReview: String(selectedDateLast),
      engineHour: hora,
      firm: responsavel,
      nextReview: String(selectedDateNext),
      expert: tecnico
    };

    try {
      const response = await api.post("/reviews", data);
      navigate("Revisao");
      Alert.alert("","Revisão criada com sucesso")
    } catch (err) {
      console.log(err.response)
      Alert.alert("","Erro no cadastro, tente novamente.");
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
            <DatePicker
              style={{width: 333}}
              date={selectedDateLast}
              placeholder="select date"
              format={FORMATS.date}
              mode="date"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  // top: 4,
                  marginLeft:20
                },
                dateInput: {
                  // marginLeft: 36
                  backgroundColor: "#FFF",
                  borderRadius: 14,
                  maxWidth:333,
                  borderColor: "#FFF",
                  height:40,
                }
              }}
              onDateChange={(date:any) => {setSelectedDateLast(date)}}
            />
        </View>
        <View style={styles.main}>
          <TextInput
            value={hora}
            placeholder="Hora/Motor" placeholderTextColor='#000'
            onChangeText={setHora}
            style={styles.mainInput3}
          />
        </View>
        <View style={styles.main}>
          <TextInput
            value={responsavel}
            placeholder="Empresa Responsável" placeholderTextColor='#000'
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

            <DatePicker
              style={{width: 333,}}
              date={selectedDateNext}
              mode="date"
              placeholder="select date"
              format={FORMATS.date}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 20
                },
                dateInput: {
                  
                  backgroundColor: "#FFF",
                  borderRadius: 14,
                  maxWidth:333,
                  borderColor: "#FFF",
                  height:40,
                }
              }}
              onDateChange={(date:any) => {setSelectedDateNext(date)}}
            />
        </View>
        <View style={styles.main}>
          <TextInput
            value={tecnico}
            placeholder="Técnico" placeholderTextColor='#000'
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
