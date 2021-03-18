import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from  '../../service/api';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo121 from '../../assets/Grupo139.png';
import Pasta from  '../../assets/Caminho46.png';


function DdJetSki(){
   const navigation = useNavigation();
   const { navigate } = useNavigation();


   const [name, setName] = useState('')
   const [proprietario, setProprietario] = useState('')
   const [marca, setMarca] = useState('')
   const [modelo, setModelo] = useState('')
   const [ano, setAno] = useState('')
   const [comprimentototal, setComprimentototal] = useState('')
   const [motor, setMotor] = useState('')
   const [combustivel, setCombustivel] = useState('')

   function hadleNavigateToAvarias(){
      navigate('Avariasjk')
      }
      function hadleNavigateToAchadosPerdidos(){
         navigate('Pedidosjet')
         }
         function hadleNavigateToCheckList1(){
            navigate('CheckList1')
            }


            async function hadleNavigateToSalva(){
               const data = {
                  name,
                  proprietario,
                  marca,
                  modelo,
                  ano,
                  comprimentototal,
                  motor,
                  combustivel,
                 }
              try{
                  const response = await api.post('/vessels',data);
                  navigation.navigate('Home')
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
                 <Image source={Grupo121} />
                 <Text style={styles.containerboxText} >Dados do Jet Ski</Text>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Nome:</Text>
               <TextInput
                value={name}
                onChangeText={setName}
               style={styles.mainInput1}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Proprietário:</Text>
               <TextInput 
               value={proprietario}
               onChangeText={setProprietario}
               style={styles.mainInput2}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Marca:</Text>
               <TextInput
                value={marca}
                onChangeText={setMarca}
               style={styles.mainInput3}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Modelo:</Text>
               <TextInput 
                value={modelo}
                onChangeText={setModelo}
                style={styles.mainInput3}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Ano:</Text>
               <TextInput  
               value={ano}
               onChangeText={setAno}
               style={styles.mainInput4}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Comprimento total:</Text>
               <TextInput  
               value={comprimentototal}
               onChangeText={setComprimentototal}
               style={styles.mainInput}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Motor:</Text>
               <TextInput 
               value={motor}
               onChangeText={setMotor}
               style={styles.mainInput5}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Combustível Capacidade:</Text>
               <TextInput 
               value={combustivel}
               onChangeText={setCombustivel}
               style={styles.mainInput6}/>
            </View>

            <TouchableOpacity onPress={hadleNavigateToSalva} style={styles.containerButton}>
                        <Text style={styles.containerButtonText}>Salvar</Text>
                    </TouchableOpacity>

            <View style={styles.mainpastas}>
               <View style={styles.mainpastas}>
               <Image source={Pasta} />
                  <Text onPress={hadleNavigateToAvarias} style={styles.mainpastasText}>
                  Avarias
                  </Text>
               </View>

               <View style={styles.mainpastas}>
               <Image source={Pasta} />
                  <Text onPress={hadleNavigateToAchadosPerdidos} style={styles.mainpastasText} >
                  Achados
                  </Text>
               </View>

               <View style={styles.mainpastas}>
               <Image source={Pasta} />
               <Text onPress={hadleNavigateToCheckList1} style={styles.mainpastasText} >
                  CheckList
                  </Text>
               </View>
            </View>
            <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default DdJetSki;