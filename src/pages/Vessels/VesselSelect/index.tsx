import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../../service/axios";

import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";
import HeaderBack from "../../../components/HeaderBack";
import { useAuth } from "../../../hooks/auth";


function EmbarcacaoList() {
  const route = useRoute();
  const { nextRoute }: any = route.params;
  const { user } = useAuth();


  const [vessels, setVessels]: any = useState([]);
  const [backHome, setbackHome]: any = useState(false);

  const { navigate } = useNavigation();

  function handleNavigateToVessel(vessel: any) {
    if(!user.employee && !user.master){
      if(nextRoute == "SchedulesNew"){
        navigate('SchedulesNew', { vessel });
      }
      else if(nextRoute == "Schedules"){
        navigate('Schedules', { vessel });
      }
      else if(nextRoute == "Supply"){
        navigate('Supply', { vessel });
      }
      else{
        navigate('AllReview', { vessel });
      }
    }else{
      navigate(nextRoute, { vessel });
    }
  }

  async function loadVessels() {
    if(nextRoute == "Supply"){
      setbackHome(true)
    }

    const response = await api.get("/vessels");
    const allVessels = response.data.allVessels;
    const vesselsClient = []
    if(!user.employee && !user.master){
      for (const vessel in allVessels) {
        if (Object.prototype.hasOwnProperty.call(allVessels, vessel)) {
          const element = allVessels[vessel];

          if(user.id === element.userId){
            vesselsClient.push(element)
          }
        }
      }
      setVessels(vesselsClient)
    }else{
      setVessels(allVessels);
    }
  }

  useEffect(() => {
    loadVessels();
  });

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack onPress={backHome ? () => navigate("Home") : null}/>

        <View style={styles.boxTitle}>
          <Text style={styles.title}>Selecione a embarcação </Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={vessels}
            keyExtractor={(vessel): any => String(vessel.id)}
            renderItem={({ item: vessel }) => (
              <TouchableOpacity
                style={styles.boxItem}
                onPress={() => handleNavigateToVessel(vessel)}
              >
                <View style={styles.contentItem}>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>PROPRIETARIO:</Text>{" "}
                    {vessel.proprietario}
                  </Text>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>MARCA:</Text> {vessel.marca}
                  </Text>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>MODELO:</Text> {vessel.modelo}
                  </Text>
                </View>
                <View style={styles.alignView}>
                  <View style={styles.tagBox}>
                    <Text style={styles.tagText}>
                      {vessel.jetski ? "JETSKI" : "LANCHA"}
                    </Text>
                  </View>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>ANO:</Text> {vessel.ano}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </>
  );
}

export default EmbarcacaoList;
