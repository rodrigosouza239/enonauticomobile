import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { useNavigation,useRoute  } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../service/api';


import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';

function PageVerifiqCode(){
    const navigation = useNavigation();
    const route:any =  useRoute( );
    const [token, setToken] = useState('')

      async function hadleNavigateToRecuperar(){
        const data ={
           token,
           email:route.params.email
        };
        try{
          const response = await api.post('/verify',data);
           await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(response.data.tokenForLogin));
           navigation.navigate('PageSucessoPassword');
        } catch(err){
            console.log(err)
            alert('Erro no cadastro, tente novamente.')
        }
        }

 

    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}> 
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="arrow-left" size={24} color="#000" />
            </BorderlessButton>
           </View>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
       <View style={styles.main}>
           <Image style={styles.mainlogo} source={Logo} />
           <View style={styles.mainInput} >
               <TextInput style={styles.mainInputText} 
               placeholder="Seu código"
               value={token}
               onChangeText={setToken}
               placeholderTextColor="#535353"
               />
           </View>
       </View>
       <View style={{justifyContent:'center', alignItems:'center', paddingTop:100}}>
       <TouchableOpacity onPress={hadleNavigateToRecuperar} style={styles.mainInputButton} >
                   <Text style={styles.mainInputButtonText}>Verificar</Text>
               </TouchableOpacity>
       </View>
    </KeyboardAvoidingView >
    </ImageBackground>
   
    </>
    )
}

export default PageVerifiqCode;