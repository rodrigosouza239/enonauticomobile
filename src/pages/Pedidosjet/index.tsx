import React,{useState} from 'react'
import { View, Text, Image, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import api from  '../../service/api';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Pasta from '../../assets/Caminho46.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


function Pedidosjet() {
    const navigation = useNavigation();
    const [date, setDate] = useState('')
    const [obs, setObs] = useState('')
    const [entreguei, setEntreguei] = useState('')
    const [name, setName] = useState('')
    const [rg, setRg] = useState('')

    async function hadleNavigateToSalva(){
        const data = {
            date,
            obs,
            entreguei,
            name,
            rg,
          }
       try{
           const response = await api.post('/achadosjetskip',data);
           navigation.navigate('DdJetSki')
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
                        <Text style={styles.containerboxText} >Achados e Perdidos</Text>
                    </View>
                    <View>
                        <TextInput
                        value={date}
                        onChangeText={setDate}
                        keyboardType="numeric"
                        style={styles.mainInputFilds} placeholder="Data:__/__/__"
                            placeholderTextColor="#FFD246" />
                    </View>

                    <Text style={styles.mainText}>
                       Obs
                     </Text>

                    <View>
                        <TextInput style={styles.mainInputText}
                            placeholder="Descrição"
                            value={obs}
                            onChangeText={setObs}
                            placeholderTextColor="#535353" />
                    </View>
                    <View>
                        <TextInput 
                           value={entreguei}
                           onChangeText={setEntreguei}
                           keyboardType="numeric"
                        style={styles.mainInputFild1} placeholder="Entregue em:__/__/__"
                            placeholderTextColor="#FFD246" />
                    </View>
                    <View>
                        <TextInput 
                           value={name}
                           onChangeText={setName}
                        style={styles.mainInputFild2} placeholder="Nome:"
                            placeholderTextColor="#FFD246" />

                             <TextInput 
                                value={rg}
                                onChangeText={setRg}
                                keyboardType="numeric"
                             style={styles.mainInputFild2} placeholder="RG:"
                            placeholderTextColor="#FFD246" />
                    </View>
                    <TouchableOpacity  onPress={hadleNavigateToSalva} style={styles.containerButton}>
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

export default Pedidosjet;