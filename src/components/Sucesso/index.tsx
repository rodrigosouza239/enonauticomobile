import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo59 from '../../assets/Grupo58.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

function Sucesso(){
   const navigation = useNavigation();
   const { navigate } = useNavigation();

    function hadleNavigateToHome(){
        navigate('Home')
        }
    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}> 
            <BorderlessButton  onPress={hadleNavigateToHome}>
               <Feather name="arrow-left" size={24} color="#FFD246" />
            </BorderlessButton>
           </View>
           <View style={styles.mainPage}>
                <Text style={styles.mainInputTextObs}>Bom passeio!</Text>
                <Text style={styles.mainText} >Agendamento realizado com sucesso.</Text>
           </View>

                     <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default Sucesso;