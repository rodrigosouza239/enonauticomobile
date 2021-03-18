import React from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import MenuBanner from '../../assets/Grupo164.png';
import styles from './styles';

function Menu(){
    return (
      <Image source={MenuBanner} />
    )
}

export default Menu;