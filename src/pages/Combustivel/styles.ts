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
      mainText:{
        fontSize:18,
       color:'#FFD246',
       marginTop:80,
       marginBottom:10,
       fontWeight:'700',
      },
      mainInputTextEsqueceu:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginLeft:200,
       marginBottom:20,
       
      },
      mainInputTextEsqueceuText:{color:'#fff',},

      mainInputButton:{
        backgroundColor:'#fff',
        width:100,
        height:40,
        marginBottom:20,
        borderRadius:14,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      },
      mainInputButtonText:{
        fontSize:16,
        color:'#535353'
      },
      footer:{
        justifyContent:'center',
        alignItems:'center',
        height:130,
        top:120,
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