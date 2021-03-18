import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../../service/auth';


import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';

function PageSucessoPassword() {
    const navigation = useNavigation();
    const { navigate } = useNavigation();
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const hadleNavigateToRecuperar = async () => {
      const userToken = await AsyncStorage.getItem('@ListApp:userToken');
      navigation.navigate(userToken ? 'App' : 'Auth');
        if(password != '' && confirmPassword != ''){
            
            let json = await Api.signForgotPassSucesso(password,confirmPassword);
            if(json.token) {
                navigate('Login')
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
                                placeholder="Nova senha"
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#535353"
                            />
                            <TextInput style={styles.mainInputText}
                                placeholder="Confirma senha"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholderTextColor="#535353"
                            />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 100 }}>
                        <TouchableOpacity onPress={hadleNavigateToRecuperar} style={styles.mainInputButton} >
                            <Text style={styles.mainInputButtonText}>Verificar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView >
            </ImageBackground>

        </>
    )
}

export default PageSucessoPassword;