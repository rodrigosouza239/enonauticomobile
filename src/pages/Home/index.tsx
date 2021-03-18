import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import Backgroud from "../../assets/backgroudmenu.png";
import Grupo56 from "../../assets/Grupo56.png";
import Grupo59 from "../../assets/Grupo59.png";
import Grupo58 from "../../assets/Grupo58.png";
import Grupo122 from "../../assets/Grupo122.png";
import Grupo151 from "../../assets/Grupo151.png";
import Grupo63 from "../../assets/Grupo63.png";
import Grupo60 from "../../assets/Grupo60.png";
import Grupo139 from "../../assets/Grupo139.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Menu from "../../components/Menu";

import { useAuth } from "../../hooks/auth";

function Home() {
  const { navigate } = useNavigation();
  const { signOut, user } = useAuth();

  function hadleNavigateToDdEmbarcacao() {
    navigate("Vessels");
  }

  function hadleNavigateToUserPerfil() {
    if(!user.master){
      navigate("UsersDetails", { user: user });
    }else{
      navigate("Users");
    }
  }

  function hadleNavigateToDdJetSki() {
    signOut();
  }
  function hadleNavigateToRevisao() {
    if(!user.employee && !user.master){
      navigate("VesselSelect", { nextRoute: "Review" });
    }else{
     navigate("Revisao");
    }
  }
  function hadleNavigateToTransmissao() {
    navigate("Transmissao");
  }

  function hadleNavigateToCombustivel() {
    navigate("VesselSelect", { nextRoute: "Supply" });
  }

  function hadleNavigateToPagamentos() {
    navigate("Pagamentos");
  }

  function hadleNavigateToAgendamentoPass() {
    if(!user.employee && !user.master){
      // navigate("SchedulesClient");
      navigate("VesselSelect", { nextRoute: "SchedulesNew" });
    }else{
      // navigate("VesselSelect", { nextRoute: "Schedules" });
      navigate("Schedules");
    }
  }

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <View style={{ marginTop: 40 }}>
          {/* menu1 */}
          <View style={styles.Viewmenu}>
            <TouchableOpacity
              style={styles.item}
              onPress={hadleNavigateToDdEmbarcacao}
            >
              <Image source={Grupo56} />
              <Text style={styles.itemTitle}>
                {!user.employee && !user.master ? "Minhas embarcações" :  "Embarcações"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={hadleNavigateToPagamentos}
              style={styles.item}
            >
              <Image source={Grupo59} />
              <Text style={styles.itemTitle}>Dados para Pagamentos</Text>
            </TouchableOpacity>
          </View>
          {/* {!user.employee && !user.master ?<></> :  (

            )} */}
          {/* menu2 */}
          <View style={styles.Viewmenu}>
            <TouchableOpacity
              onPress={hadleNavigateToAgendamentoPass}
              style={styles.item}
            >
              <Image source={Grupo58} />
              <Text style={styles.itemTitle}>
              {!user.employee && !user.master ? "Agendar Passeios" :  "Agendamentos de Passeios"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={hadleNavigateToCombustivel}
              style={styles.item}
            >
              <Image source={Grupo122} />
              <Text style={styles.itemTitle}>Combustível / Hora Motor</Text>
            </TouchableOpacity>
          </View>

          {/* menu3 */}
          <View style={styles.Viewmenu}>
            <TouchableOpacity
              style={styles.item}
              onPress={hadleNavigateToRevisao}
            >
              <Image source={Grupo60} />
              <Text style={styles.itemTitle}>Revisões</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.item}
              onPress={hadleNavigateToTransmissao}
            >
              <Image source={Grupo63} />
              <Text style={styles.itemTitle}>Transmissão ao vivo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.Viewmenu}>
            <TouchableOpacity
              onPress={hadleNavigateToUserPerfil}
              style={styles.item}
            >
              <Image source={Grupo151} />
              <Text style={styles.itemTitle}>
                {!user.master ? "Minha conta" :  "Usuarios"}
              </Text>
              {/* Perfil do Usuario */}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={hadleNavigateToDdJetSki}
            >
              <AntDesign name="poweroff" size={42} color="#FFD246"/>
              <Text style={styles.itemTitle}>Sair da aplicação</Text>
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

export default Home;
