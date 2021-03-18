import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import api from '../../service/api';

import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';


function Register(){
    const navigation = useNavigation();
    const { navigate } = useNavigation();
    const[loading, setLoading] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [employee, setEmployee] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')




 async function hadleNavigateToHomePage(){
    const data ={
        name,
        email,
        password,
        phone,
        employee
    };
    try{
        const response = await api.post('/users',data);
        navigation.navigate('SejaBv')
    } catch(err){
        alert('APENAS MASTER PODER CRIAR USUARIOS')
    }
    }

    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}>
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="arrow-left" size={24} color="#000" />
            </BorderlessButton>
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="menu" size={24} color="#FFD246" />
            </BorderlessButton>
           </View>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
            <View style={styles.main}>
           <Image style={styles.mainlogo} source={Logo} />
           <View style={styles.mainInput} >
               <TextInput style={styles.mainInputText}
               placeholder="Usuário"
               placeholderTextColor="#535353"
               value={name}
               onChangeText={setName}
               />
               <TextInput style={styles.mainInputText}
               placeholder="Seu cargo"
               placeholderTextColor="#535353"
               value={employee}
               onChangeText={setEmployee}
               />
                <TextInput style={styles.mainInputText}
               placeholder="Seu Celular ou Whatsapp"
               placeholderTextColor="#535353"
               value={phone}
               onChangeText={setPhone}
               />
               <TextInput style={styles.mainInputText}
               placeholder="E-mail"
               autoCapitalize="none"
               autoCorrect={false}
               placeholderTextColor="#535353"
               value={email}
               onChangeText={setEmail}
               />
               <TextInput style={styles.mainInputText}
               placeholder="Senha"
               placeholderTextColor="#535353"
               maxLength={8}
               value={password}
               secureTextEntry={true}
               onChangeText={ setPassword}
               />
               <View style={styles.mainInputTextEsqueceu}>
               <Text style={styles.mainInputTextEsqueceuText}>Pelo menos 6 caracteres*</Text>
               </View>
               <TouchableOpacity onPress={hadleNavigateToHomePage} style={styles.mainInputButton} >
                   <Text style={styles.mainInputButtonText}>Criar cadastro</Text>
               </TouchableOpacity>
           </View>
       </View>
    </KeyboardAvoidingView >
    </ImageBackground>
    </>
    )
}

export default Register;
