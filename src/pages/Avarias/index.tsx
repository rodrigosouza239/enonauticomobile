import React,{useState} from 'react'
import { View, Text, Image, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Pasta from '../../assets/Caminho46.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from  '../../service/api';


function Avarias() {
    const navigation = useNavigation();
    const [obs, setObs] = useState('')

    async function hadleNavigateToSalva(){
        const data = {
           obs,
          }
       try{
           const response = await api.post('/damaged',data);
           navigation.navigate('DdEmbarcacao')
       } catch(err){
           alert('Erro no cadastro, tente novamente.')
       }
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
                        <Text style={styles.containerboxText} >Avarias</Text>
                    </View>
                    <Text style={styles.mainText}>
                        Lancha:
                     </Text>

                    <View>
                        <TextInput style={styles.mainInputText}
                            placeholder="Descrição"
                            placeholderTextColor="#535353"
                            value={obs}
                            onChangeText={setObs}
                            />
                    </View>
                    <TouchableOpacity onPress={hadleNavigateToSalva} style={styles.containerButton}>
                        <Text style={styles.containerButtonText}>Salvar</Text>
                    </TouchableOpacity>

                </View>
              
      

                <View style={styles.footer}>
                    <Image style={styles.footerImg} source={Logo} />
                </View>
            </ImageBackground>
        </>
    )
}

export default Avarias;