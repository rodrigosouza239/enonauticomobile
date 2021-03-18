import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../service/axios";

import HeaderBack from "../../components/HeaderBack";

import { useAuth } from "../../hooks/auth";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";

function Findings() {

  const { user } = useAuth();
  const { navigate } = useNavigation();
  const route = useRoute();
  const { id }: any = route.params;
  const [findings, setFindings]: any = useState([]);

  function handleDate(timeZone: any) {
    const year = timeZone.substring(0, 4);
    const mount = timeZone.substring(5, 7);
    const day = timeZone.substring(8, 10);

    const time = day + "/" + mount + "/" + year;
    return time;
  }

  async function loadFinginds() {
    const response = await api.get(`/vessels/${id}/findings`);
    // console.log(response);
    setFindings(response.data);
  }

  function handleGoEditFinding(finding:any){
    if(!user.employee && !user.master){
      return
    }else{
      navigate("FindingsEdit", { finding })
    }
  }

  useEffect(() => {
    loadFinginds();
  });

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack onPress={() => navigate("Vessel")} />

        <View style={styles.boxTitle}>
          <Text style={styles.title}>Achados e Perdidos</Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={findings}
            keyExtractor={(finding) => String(finding.id)}
            renderItem={({ item: finding }) => (
              <TouchableOpacity
                style={styles.boxItem}
                onPress={()=> handleGoEditFinding(finding)}>

                <View style={styles.contentItem}>
                  <Text style={styles.textItem}>
                    <Text style={styles.textBold}>Encontrado: </Text>
                    {finding.comments}
                  </Text>
                  {finding.delivered ? (
                    <>
                      <Text style={styles.textItem}>
                        <Text style={styles.textBold}>Entregue no dia: </Text>
                        {handleDate(finding.delivered)}
                      </Text>

                      <Text style={styles.textItem}>
                        <Text style={styles.textBold}>Retirado por: </Text>
                        {finding.name}
                      </Text>

                      <Text style={styles.textItem}>
                        <Text style={styles.textBold}>Com o Rg: </Text>
                        {finding.rg}
                      </Text>
                    </>
                  ) : null}
                </View>

                <View style={styles.tagBox}>
                  <Text style={styles.tagText}>
                    {handleDate(finding.found)}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>


        {!user.employee && !user.master ?  <></> : (
           <View style={styles.footer}>
           <TouchableOpacity
             style={styles.containerButton}
             onPress={() => navigate("FindingsNew", { id })}
           >
             <Feather name="plus" size={18} color="#FFF" />
             <Text style={styles.containerButtonText}>NOVO ACHADO</Text>
           </TouchableOpacity>
         </View>
        )}

      </ImageBackground>
    </>
  );
}

export default Findings;
