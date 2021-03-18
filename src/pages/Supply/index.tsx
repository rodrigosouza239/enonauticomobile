import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  // StyleSheet
} from "react-native";
import { RectButton } from 'react-native-gesture-handler';

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Grupo122 from "../../assets/Grupo122.png";
import Grupo134 from "../../assets/Grupo134.png";
import Grupo135 from "../../assets/Grupo135.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderBack from "../../components/HeaderBack";
import api from "../../service/axios";

import { useAuth } from "../../hooks/auth";


function CombustivelJet() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();
  const route = useRoute();
  const { vessel }: any = route.params;
  const { user } = useAuth();

  const [valueInput, setValueInput ] = useState(0);
  const [engineHour, setEngineHour ] = useState("");

  const [checkedFalse1, setCheckedcheckedFalse1 ] = useState(false);
  const [checkedFalse2, setCheckedcheckedFalse2 ] = useState(false);
  const [checkedFalse3, setCheckedcheckedFalse3 ] = useState(false);
  const [checkedFalse4, setCheckedcheckedFalse4 ] = useState(false);
  const [checkedFalse5, setCheckedcheckedFalse5 ] = useState(false);
  const [checkedFalse6, setCheckedcheckedFalse6 ] = useState(false);
  const [checkedFalse7, setCheckedcheckedFalse7 ] = useState(false);
  const [checkedFalse8, setCheckedcheckedFalse8 ] = useState(false);

  function updateInputValue(n:any){
    if(n === 1){
      if(valueInput === 0){
        setValueInput(1)
        setCheckedcheckedFalse1(true)
        setCheckedcheckedFalse2(false)
        setCheckedcheckedFalse3(false)
        setCheckedcheckedFalse4(false)
        setCheckedcheckedFalse5(false)
        setCheckedcheckedFalse6(false)
        setCheckedcheckedFalse7(false)
        setCheckedcheckedFalse8(false)
      }else{
        setValueInput(0)
        setCheckedcheckedFalse1(false)
        setCheckedcheckedFalse2(false)
        setCheckedcheckedFalse3(false)
        setCheckedcheckedFalse4(false)
        setCheckedcheckedFalse5(false)
        setCheckedcheckedFalse6(false)
        setCheckedcheckedFalse7(false)
        setCheckedcheckedFalse8(false)
      }
    } if(n === 2){
      setValueInput(2)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(false)
      setCheckedcheckedFalse4(false)
      setCheckedcheckedFalse5(false)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 3){
      setValueInput(3)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(false)
      setCheckedcheckedFalse5(false)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 4){
      setValueInput(4)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(false)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 5){
      setValueInput(5)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(false)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 6){
      setValueInput(6)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(true)
      setCheckedcheckedFalse7(false)
      setCheckedcheckedFalse8(false)
    } if(n === 7){
      setValueInput(7)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(true)
      setCheckedcheckedFalse7(true)
      setCheckedcheckedFalse8(false)
    } if(n === 8){
      setValueInput(8)
      setCheckedcheckedFalse1(true)
      setCheckedcheckedFalse2(true)
      setCheckedcheckedFalse3(true)
      setCheckedcheckedFalse4(true)
      setCheckedcheckedFalse5(true)
      setCheckedcheckedFalse6(true)
      setCheckedcheckedFalse7(true)
      setCheckedcheckedFalse8(true)
    }
  }

  async function handleSaveSupply(){
    try {
      const response = await api.put(`/vessels/${vessel.id}/supply`, {
        motor: engineHour,
        combustivel: valueInput
      })
      navigate("VesselSelectTwo", { nextRoute: "Supply" });
    } catch (error) {
      // cons
    }
  }

  useEffect(() => {
    setEngineHour(vessel.motor)
    updateInputValue(Number(vessel.combustivel))
  }, []);


  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />
        <View style={styles.mainPage}>
          <View style={styles.containerbox}>
            <Image style={styles.containerboxImage} source={Grupo122} />
            <Text style={styles.containerboxText}>
              Combustível / Hora Motor
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#fff",
                justifyContent: "center",
                textAlign: "left",
                fontWeight: "600",
                left: 55,
              }}
            >
              Combustível
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "4%",
              }}
            >
              <Image
                style={{ marginRight: 10, width: 42, height: 70 }}
                source={Grupo134}
              />
              <View style={styles.CheckBox}>
          <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(1)} >
            <View  style={{
              height:50,
              marginRight:2,
              width:30,
              borderTopLeftRadius:5,
              borderBottomLeftRadius:5,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor: checkedFalse1 ? "#FFD246" : "#fff",
              }}  >
          </View>
        </RectButton>

        <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(2)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse2 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(3)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse3 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(4)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse4 ? "#FFD246" : "#fff",
          }}>
          </View>
        </RectButton>

        <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(5)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse5 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(6)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse6 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(7)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse7 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>

        <RectButton onPress={!user.employee && !user.master ? ()=>{} :() => updateInputValue(8)} >
          <View  style={{
            height:50,
            width:30,
            marginRight:2,
            borderRadius:2,
            borderTopRightRadius:5,
            borderBottomRightRadius:5,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: checkedFalse8 ? "#FFD246" : "#fff",
            }}  >
          </View>
        </RectButton>
      </View>
            </View>
          </View>
          <View style={{ marginTop: "8%" }}>
            <Text
              style={{
                color: "#fff",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Hora / Motor
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "4%",
              }}
            >
              <Image
                style={{
                  marginRight: 10,
                  width: 79,
                  height: 69,
                }}
                source={Grupo135}
              />
              <TextInput
                placeholder="0000"
                placeholderTextColor="#222"
                keyboardType="phone-pad"
                value={engineHour}
                // onChangeText={!user.employee && !user.master ? ()=>{} : setEngineHour}
                onChangeText={setEngineHour}
                editable={!user.employee && !user.master ? false : true}
                style={{
                  backgroundColor: "#fff",
                  width: 190,
                  height: 62,
                  color:"#222",
                  fontSize: 20,
                  paddingHorizontal: 40,
                  left: 10,
                  borderRadius: 9,
                }}
              />
            </View>
          </View>

         {!user.employee && !user.master ? <></> : (
            <View>
              <TouchableOpacity style={styles.mainInputButton} onPress={handleSaveSupply}>
                <Text style={styles.mainInputButtonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
         )}
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default CombustivelJet;
