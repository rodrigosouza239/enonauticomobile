import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo122 from '../../assets/Grupo122.png';
import Grupo134 from '../../assets/Grupo134.png';
import Grupo135 from '../../assets/Grupo135.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import InputCombustivel from '../../components/Forms/InputCombustivel';


function CombustivelLancha() {
    const navigation = useNavigation();
    const { navigate } = useNavigation();

    function hadleNavigateToCombustivelJet() {
        navigate('Avarias')
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
                        <Image style={styles.containerboxImage} source={Grupo122} />
                        <Text style={styles.containerboxText} >Combustível / Hora Motor</Text>
                    </View>
                    <View style={styles.mainPageForm} >
                        <Text style={styles.mainText}>
                        Lancha:
                     </Text>
                        <TextInput style={styles.mainTextInput} />
                    </View>
                    <View>
                    <Text style={{color:'#fff',justifyContent:'center',textAlign:'left' ,fontWeight:'600',left:55}} >Combustível </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image  style={{ marginRight: 10, width:42,height:70 }} source={Grupo134} />
                        <InputCombustivel />
                    </View>
                    </View>
                    <View>
                        <Text style={{color:'#fff',justifyContent:'center',textAlign:'center',fontWeight:'600'}} >Hora / Motor</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:10, }}>
                            <Image style={{ marginRight: 10, width:79,height:69 }} source={Grupo135} />
                            <TextInput placeholder="0000"  placeholderTextColor="#ADADAD" style={{
                                backgroundColor: '#fff',
                                width: 190,
                                height: 62,
                                fontSize:30,
                                paddingHorizontal:40,
                                left: 10,
                                borderRadius: 9,
                            }} />
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.mainInputButton} >
                            <Text style={styles.mainInputButtonText} >
                                Enviar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Image style={styles.footerImg} source={Logo} />
                </View>
            </ImageBackground>
        </>
    )
}

export default CombustivelLancha;