import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import Api from '../../service/auth';


import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';



function RecuperarPassWord(){
    const navigation = useNavigation();
    const { navigate } = useNavigation();
    const [email, setEmail] = useState('')

    //   async function hadleNavigateToRecuperar(){
    //     const data ={
    //         email,
    //     };
    //     try{
    //         console.log('start')
    //         const response = await api.post('/forgot',data);
    //         console.log(response)
    //         navigation.navigate('PageVerifiqcode',{
    //             email
    //         })
    //     } catch(err){
    //         console.log(err)
    //         alert('Erro no cadastro, tente novamente.')
    //     }
    //     }

    const hadleNavigateToRecuperar = async () => {
        if(email != ''){
            
            let json = await Api.signForgot(email);
            if(json.token) {
                navigate('PageVerifiqcode',{
                    email
                })
            } else{
                alert('E-mail errado')
            }
        } else {
            alert( 'Preencha os campos!');
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
               placeholder="E-mail"
               value={email}
               onChangeText={setEmail}
               placeholderTextColor="#535353"
               />
           </View>
       </View>
       <View style={{justifyContent:'center', alignItems:'center', paddingTop:100}}>
       <TouchableOpacity onPress={hadleNavigateToRecuperar} style={styles.mainInputButton} >
                   <Text style={styles.mainInputButtonText}>Enviar</Text>
               </TouchableOpacity>
       </View>
    </KeyboardAvoidingView >
    </ImageBackground>
   
    </>
    )
}

export default RecuperarPassWord;