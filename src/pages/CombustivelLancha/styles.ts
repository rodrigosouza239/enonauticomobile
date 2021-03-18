import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:32,
        paddingTop: 20 + Constants.statusBarHeight,
      },
      containerBack:{
        flexDirection:'row',
        justifyContent:'space-between'
       },
      containerbox:{
        marginBottom:30,
        marginTop:120,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      containerboxImage:{
      },
      containerboxText:{
       fontSize:23,
       color:'#FFD246',
       fontWeight:'700',
       paddingHorizontal:10,
      },
      mainPage:{
        justifyContent:'center',
        alignItems:'center',
      },
      mainPageForm:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:20,
      },
      mainText:{
        fontSize:18,
       color:'#ffff',
       top:5,
       fontWeight:'700',
      },
      mainTextInput:{
        backgroundColor:'#fff',
        width:240,
        height:32,
        left:10,
        borderRadius:9,
      },
      mainInputTextEsqueceuText:{color:'#fff',},
      mainInputButton:{
        backgroundColor:'#FFD246',
        width:100,
        height:40,
        borderRadius:14,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      },
      mainInputButtonText:{
        fontSize:16,
        color:'#000'
      },
      footer:{
        justifyContent:'center',
        alignItems:'center',
        height:130,
        top:80,
      },
      footerImg:{
        width:133,
        height:70
      },
      footerTextBold:{
        fontWeight:'800',
        color:'#fff',
        fontSize:14,
      },
})

export default styles;