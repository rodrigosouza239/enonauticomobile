import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import api from "../../../service/axios";

import HeaderBack from "../../../components/HeaderBack";
import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";

export default function Schedules() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { vessel }: any = route.params;
  const [reviews, setReviews]: any = useState([]);

  function handleDate(timeZone: any) {
    const year = timeZone.substring(0, 4);
    const mount = timeZone.substring(5, 7);
    const day = timeZone.substring(8, 10);

    const time = day + "/" + mount + "/" + year;
    return time;
  }

  async function loadReviews() {
    const response = await api.get(`/reviews/${vessel.id}`);
    // console.log(response);
    setReviews(response.data);
  }

  useEffect(() => {
    loadReviews();
  });

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={Backgroud}
    >
      <HeaderBack />

      <View style={styles.boxTitle}>
        <Text style={styles.title}>Todas as revisões</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={reviews}
          keyExtractor={(review) => String(review.id)}
          renderItem={({ item: review }) => (
            <TouchableOpacity
              style={styles.boxItem}
              onPress={() => navigate("ReviewDetails", { review })}
            >
              <View style={styles.contentItem}>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>CLIENTE: </Text>
                  {vessel.proprietario}
                </Text>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>NOME DA EMBARCAÇÂO: </Text>
                  {vessel.name}
                </Text>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>TÉCNICO QUE REALIZOU: </Text>
                  {review.expert}
                </Text>
              </View>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>
                  {/* {schedule.employee ? "FUNCIONARIO" : "CLIENTE"} */}
                  {handleDate(review.created)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}
