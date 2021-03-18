import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../service/axios";

import { useAuth } from "../../hooks/auth";

import HeaderBack from "../../components/HeaderBack";
import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";

export default function Schedules() {
  const { navigate } = useNavigation();
  const [schedules, setSchedules]: any = useState([]);

  const { user } = useAuth();

  const route = useRoute();


  function handleDate(timeZone: any) {
    const year = timeZone.substring(0, 4);
    const mount = timeZone.substring(5, 7);
    const day = timeZone.substring(8, 10);

    const time = day + "/" + mount + "/" + year;
    return time;
  }

  async function loadSchedules() {
    if(!user.employee && !user.master){
      const { vessel }: any = route.params;
      console.log(vessel.id)
      const response = await api.get(`/vessels/${vessel.id}/schedules`);
      const schedulesFormmated = []
      for (const item in response.data) {
        if (Object.prototype.hasOwnProperty.call(response.data, item)) {
          const element = response.data[item];
          const schema = {
            id: element.id,
            vessel: {
              proprietario: element.proprietario,
              name: vessel.name
            },
            time: String(element.time),
            comments: element.comments
          }
          schedulesFormmated.push(schema)
        }
      }
      setSchedules(schedulesFormmated);
    }else{
      const response = await api.get("/schedules");
      const responseTwo = await api.get("/vessels")
      const vessels = responseTwo.data.allVessels;
      const schedulesFormmated = []
      for (const item in response.data) {
        if (Object.prototype.hasOwnProperty.call(response.data, item)) {
          const element = response.data[item];
          let vessel = {};

          for (const key in vessels) {
            if (Object.prototype.hasOwnProperty.call(vessels, key)) {
              const element = vessels[key];
              console.log(element)
              vessel = element;
            }
          }
          const schema = {
            id: element.id,
            vessel,
            time: String(element.time),
            comments: element.comments
          }
          schedulesFormmated.push(schema)
        }
      }
      setSchedules(schedulesFormmated);
    }
  }

  useEffect(() => {
    loadSchedules();
  });

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={Backgroud}
    >
      <HeaderBack />

      <View style={styles.boxTitle}>
        <Text style={styles.title}>Todos os Agendamentos</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={schedules}
          keyExtractor={(schedule) => String(schedule.id)}
          renderItem={({ item: schedule }) => (
            <TouchableOpacity
              style={styles.boxItem}
              // onPress={() => navigate("SchedulesNew", { schedule })}
            >
              <View style={styles.contentItem}>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>CLIENTE:</Text>
                  {schedule.vessel.proprietario}
                </Text>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>NOME DA EMBARCAÇÂO:</Text>
                  {schedule.vessel.name}
                </Text>
                <Text style={styles.textItemParagrafo}>
                  {schedule.comments ? (
                    <Text>
                      <Text style={styles.textBold}>OBSERVAÇÔES:</Text>
                      {schedule.comments}
                    </Text>
                  ) : null}
                </Text>
              </View>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>
                  {/* {schedule.employee ? "FUNCIONARIO" : "CLIENTE"} */}
                  {handleDate(schedule.time)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}
