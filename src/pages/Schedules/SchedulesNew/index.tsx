import React, { useState } from "react";
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, Alert } from "react-native";

import DatePicker from 'react-native-datepicker'

import HeaderBack from "../../../components/HeaderBack";
import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../../assets/logo.png";
import Grupo59 from "../../../assets/Grupo58.png";
import { useRoute, useNavigation } from "@react-navigation/native";

import api from '../../../service/axios'

function SchedulesDetails() {
  const route: any = useRoute();
  const { vessel }: any = route.params;
  const {navigate} = useNavigation()

  const [date, setDate] = useState(new Date());
  const [obs, setObs] = useState("");

  function handleSaveSchedule(){
    if(!obs){
      alert('Preencha todos os campos')
    }

    async function create() {
      const data = {
        time: String(date),
        comments:obs
      };

      try {
        const response = await api.post(`/vessels/${vessel.id}/schedules`, data);
        navigate("Home");
      } catch (err) {
        console.log(err.response)
        alert("Erro no cadastro, tente novamente.");
      }
    }

    Alert.alert("Criar Agendamento", "Você quer mesmo salvar esses dados?", [
      {
        text: "Cancelar",
      },
      { text: "Confirmar", onPress: () => create() },
    ]);
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.mainPage}>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={Grupo59} />
            <Text style={styles.headerText}>Agendar Passeio</Text>
          </View>

          <View style={styles.mainPageForm}>
            <Text style={styles.mainText}>Data :</Text>

            <DatePicker
              style={{width: 200}}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2021-01-01"
              maxDate="2099-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  // top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  // marginLeft: 36
                  backgroundColor: "#FFF",
                  borderRadius: 14,
                  maxWidth: "60%",
                  borderColor: "#FFF",
                  height: 38,
                }
              }}
              onDateChange={(date:any) => {setDate(date)}}
            />
          </View>
          <Text style={styles.mainInputTextEsqueceuText}>
            *Agendamento com 2 dias de antecedência.
          </Text>

          <View>
            <Text style={styles.mainInputTextObs}>Obs:</Text>
            <TextInput
              value={obs}
              style={styles.mainInputText}
              placeholder="Descrição"
              placeholderTextColor="#535353"
              onChangeText={setObs}
              underlineColorAndroid="transparent"
              numberOfLines={10}
              multiline={true}
            />
          </View>

          <View style={styles.mainpastas}>
          <TouchableOpacity
            onPress={handleSaveSchedule}
            style={styles.mainInputButton}
          >
            <Text style={styles.mainInputButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default SchedulesDetails;
