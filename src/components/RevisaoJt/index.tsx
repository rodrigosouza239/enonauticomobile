import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import api from '../../service/api';





import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo60 from '../../assets/Grupo60.png';


function RevisaoJt(){
   const navigation = useNavigation();
   const { navigate } = useNavigation();

   const [lancha, setLancha] = useState('')
    const [date, setDate] = useState('')
    const [hora, setHora] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [revisao, setRevisao] = useState('')
    const [tecnico, setTecnico] = useState('')


      async function hadleNavigateToSalvar(){
         const data ={
            lancha,
            date,
            hora,
            responsavel,
            revisao,
            tecnico,
         };
         try{
             const response = await api.post('/revisaojet',data);
             navigation.navigate('Revisao')
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
            <View style={styles.containerbox}>
                 <Image source={Grupo60} />
                 <Text style={styles.containerboxText} >Revisão</Text>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Jet:</Text>
               <TextInput 
               value={lancha}
               onChangeText={setLancha}
               style={styles.mainInput1}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Data da última revisão:</Text>
               <TextInput 
               value={date}
               onChangeText={setDate}
               style={styles.mainInput2}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Hora/Motor:</Text>
               <TextInput
               value={hora}
               onChangeText={setHora}
               style={styles.mainInput3}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Empresa Responsável:</Text>
               <TextInput
               value={responsavel}
               onChangeText={setResponsavel}
               style={styles.mainInput4}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Próxima Revisão:</Text>
               <TextInput 
               value={revisao}
               onChangeText={setRevisao}
               style={styles.mainInput}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Técnico:</Text>
               <TextInput
               value={tecnico}
               onChangeText={setTecnico}
               style={styles.mainInput5}/>
            </View>

            <View style={styles.mainpastas}>
            <TouchableOpacity onPress={hadleNavigateToSalvar} style={styles.mainInputButton} >
                         <Text style={styles.mainInputButtonText}>Salvar</Text>
                     </TouchableOpacity>
            </View>
            <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default RevisaoJt;