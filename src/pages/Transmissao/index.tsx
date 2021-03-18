import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo63 from '../../assets/Grupo63.png';
import { Video } from 'expo-av';
import HeaderBack from '../../components/HeaderBack';


function Transmissao() {
  const navigation = useNavigation();
  const variavelTeste = true;
  if(variavelTeste){
    return (
      <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
          <HeaderBack />

          <View style={styles.header}>
           <Text style={styles.headerText}>Transmissões</Text>
           <Text style={styles.headerText}>Ao Vivo</Text>
          </View>


          <View style={styles.mainBox}>
            <Text style={styles.text}>Nenhuma transmissão esta ao vivo no momento</Text>
            <AntDesign size={102} color="#fff" name="frowno" style={styles.icon}/>
          </View>

          <View style={styles.footer}>
            <Image style={styles.footerImg} source={Logo} />
          </View>
        </ImageBackground>
      </>
    )
  } else {
     return (
      <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
          <View style={styles.containerBack}>
            <BorderlessButton onPress={navigation.goBack}>
              <Feather name="arrow-left" size={24} color="#FFD246" />
            </BorderlessButton>
            <BorderlessButton onPress={navigation.goBack}>
              <Feather name="menu" size={24} color="#FFD246" />
            </BorderlessButton>
          </View>
          <View style={styles.containerbox}>
              <Image source={Grupo63} />
              <Text style={styles.containerboxText} >Transmissão ao vivo</Text>
          </View>
            <View style={styles.main}>
              <Video
                  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay
                  isLooping
                  style={{ width: 300, height: 220 }}
              />
            </View>
            <View style={styles.footer}>
            <Image style={styles.footerImg} source={Logo} />
          </View>
        </ImageBackground>
    </>
)
}}

export default Transmissao;
