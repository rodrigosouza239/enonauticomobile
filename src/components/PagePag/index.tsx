
import React, { useState } from 'react';
import { Feather as Icon} from "@expo/vector-icons";
import { View, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Alert,ImageBackground,KeyboardAvoidingView,Platform} from 'react-native';
import { StackActions, useNavigation} from '@react-navigation/native';


import api from '../../service/iugu';

import Backgroud from '../../assets/backgroudmenu.png';

const PagePag = () => {
  const[loading, setLoading] = useState(false);
  const { navigate } = useNavigation();
  const navigation = useNavigation();

  
    const [account_id, setAccount_id] = useState('')
    const [method, setMethod] = useState('')
    const [number, setNumber] = useState('')
    const [verification_value, setVerification_value] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

  async function hadleNavigateCartao (){
    setLoading(true)
    const data ={
      account_id: "D729171B6B83931343D6AD22E4519980",
      method : "credit_card",
      number,
      verification_value,
      first_name,
      last_name,
      month,
      year
    };
    try{
        const response = await api.post('/payment_token',data);
        console.log(response)
        navigation.navigate('SejaBv')
    } catch(err){
        Alert.alert('Erro no Cartão.')
        setLoading(false);
    }
}

  return (
      <>
       <ImageBackground style={styles.CheckBox} resizeMode="cover" source={Backgroud}>
       <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
              <TextInput
              value={number}
              onChangeText={setNumber}
              style={styles.mainInputText}
                placeholderTextColor="#535353"
                placeholder="Numero do cartão"
                keyboardType="numeric"
              />
               <TextInput
               value={verification_value}
               onChangeText={setVerification_value}
               style={styles.mainInputText}
                placeholderTextColor="#535353"
                placeholder="Cvv"
                keyboardType="numeric"
              />
              <TextInput
              value={first_name}
              onChangeText={setFirst_name}
              style={styles.mainInputText}
               placeholderTextColor="#535353"
                placeholder="Primeiro nome"
              />
              <TextInput
              value={last_name}
              onChangeText={setLast_name}
              style={styles.mainInputText}
               placeholderTextColor="#535353"
                placeholder="Último nome"
              />
              <TextInput
              value={month}
              onChangeText={setMonth}
              style={styles.mainInputText}
               placeholderTextColor="#535353"
                placeholder="Mês"
                keyboardType="numeric"
              />
              <TextInput
              value={year}
              onChangeText={setYear}
              style={styles.mainInputText}
               placeholderTextColor="#535353"
                placeholder="Ano"
                keyboardType="numeric"
              />
               </KeyboardAvoidingView >
               <TouchableOpacity onPress={hadleNavigateCartao} style={styles.mainInputButton} >
                   {loading ? (
                         <ActivityIndicator  size="small" color="#000" />
                   ) : (
                    <Text style={styles.mainInputButtonText}>Cadastrar</Text>
                   )}   
               </TouchableOpacity>
       </ImageBackground>
 
      </>
  );
}

const styles = StyleSheet.create({
    CheckBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
      mainInputText:{
        backgroundColor:'#fff',
        width:330,
        height:60,
        marginBottom:20,
        borderRadius:14,
        fontSize:16,
        paddingHorizontal:20,
      },
      mainInputButton:{
        backgroundColor:'#FFD246',
        width:219,
        height:50,
        marginBottom:40,
        borderRadius:14,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      },
      mainInputButtonText:{
        fontSize:16,
        color:'#000',
        fontWeight:'bold'
      },
})

export default PagePag ;