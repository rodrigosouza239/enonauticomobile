import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, ImageBackground,TouchableOpacity} from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';




 function SejaBv (props: any) {
    const { navigate } = useNavigation();

    function hadleNavigateToPageHome() {
        navigate('EmbarcacaoList')
    }
    return (
        <>
            <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
                <View style={styles.main}>
                    <Text style={styles.containerText}>Olá, é bom ter você aqui!</Text>
                    <Text style={styles.containerText2}>Bem vindo ao aplicativo
                    da <Text style={styles.containerText3}>Eno Náutica</Text>
                    Saiba tudo sobre sua
                    Embarcação com apenas
um click.</Text>
<TouchableOpacity onPress={hadleNavigateToPageHome} style={styles.containerButton}>
    <Text style={styles.containerButtonText}>Começa</Text>
</TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.footer}>
                <Image style={styles.footerImg} source={Logo} />
            </View>
        </>
    )
}

export default SejaBv;