import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import CheckBox from '../../../../components/Forms/Checkbox';
import Constants from 'expo-constants';


import Backgroud from '../../../../assets/backgroudmenu.png';
import Logo from '../../../../assets/logo.png';
import Pasta from '../../../../assets/Caminho46.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


function Checklist2() {
       const navigation = useNavigation();
       const { navigate } = useNavigation();

       function hadleNavigateToCheckList3(){
       navigate('CheckList3')
       }
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
                            <View style={styles.mainPage}>
                                   <View style={styles.containerbox}>
                                          <Image style={styles.containerboxImage} source={Pasta} />
                                          <Text style={styles.containerboxText} >CheckList</Text>
                                   </View>
                                   <View style={styles.icon} >
                                          <Feather size={17} color="#FA5A4C" name="x" />
                                          <Feather size={17} color="#63E669" name="check" />
                                          <Text style={styles.label} >Itens</Text>
                                   </View>
                                   {/* CheckBox */}
                                   <CheckBox label="Escada" />
                                   <CheckBox label="Cordão de Segurança" />
                                   <CheckBox label="Documentação" />
                                   <CheckBox label="Manoplas" />
                                   <CheckBox label="Banco" />
                                   <CheckBox label="Chave Reserva" />
                                   <CheckBox label="Ponteira" />
                                   <CheckBox label="Friso Lateral" />
                                   <CheckBox label="Retrovisor" />
                                   <CheckBox label="Luz de Navegação" />
                                   <CheckBox label="Casco" />
                                   <CheckBox label="Capa de Proteção" />
                                   <CheckBox label="Carreta" />
                                   <CheckBox label="Amortecedor de Proa" />
                                   {/*  final */}
                            </View>

                            <View style={{justifyContent:'flex-end',
                                  alignItems:'flex-end'
                            }} >
                                          <TouchableOpacity onPress={hadleNavigateToCheckList3} >
                                          <Feather size={30} color="#fff" name="arrow-right" />
                                          </TouchableOpacity>
                                   </View>

                            <View style={styles.footer}>
                                   <Image style={styles.footerImg} source={Logo} />
                            </View>
                     </ImageBackground>
              </>
       )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  containerBack:{
    flexDirection:'row',
    justifyContent:'space-between'
   },
  containerbox:{
    marginBottom:30,
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  containerboxImage:{
  },
  containerboxText:{
   fontSize:23,
   color:'#FFD246',
   fontWeight:'700',
   paddingHorizontal:10,
  },
  mainPage:{
    justifyContent:'center',
    alignItems:'flex-start'
  },
  mainText:{
    fontSize:18,
   color:'#FFD246',
   marginTop:40,
   marginBottom:10,
   fontWeight:'700',
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
  },
  footerImg:{
    width:133,
    height:70
  },
  icon: {
    flexDirection: "row",
    alignItems:'center'
  },
  label: {
    margin: 8,
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',
    left:5,
  },
})

export default Checklist2;