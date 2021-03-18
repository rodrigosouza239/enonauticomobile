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


function Checklist3() {
       const navigation = useNavigation();
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
                                   <CheckBox label="Amortecedor de Popa" />
                                   <CheckBox label="Cooler" />
                                   <CheckBox label="Som" />
                                   <CheckBox label="Tanque Reserva" />
                                   {/*  final */}
                            </View>

                            <View style={{justifyContent:'center',
                                  alignItems:'center'
                            }} >
                                          <TouchableOpacity  style={styles.containerButton} >
                                           <Text style={styles.containerButtonText} >Salvar</Text>
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
  containerButton:{
       width:120,
       height:50,
       marginTop:210,
       borderRadius:10,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#FFD246'
     },
     containerButtonText:{
       fontSize:17,
       color:'#000',
       fontWeight:'700',
       paddingHorizontal:10,
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
    height:290,
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

export default Checklist3;