import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      main:{
        justifyContent:'center',
        marginTop:120,
        alignItems:'center'
      },
      mainlogo:{
        width:227,
        height:118,
        marginBottom:90,
      },

      mainInput:{
      justifyContent:'space-between',
      alignItems:'center',
      },
      mainInputText:{
        backgroundColor:'#fff',
        width:330,
        height:60,
        marginBottom:20,
        borderRadius:14,
        fontSize:16,
        paddingHorizontal:20,
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
        width:219,
        height:50,
        marginBottom:40,
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
        height:40,
        top:130
      },
      footerText:{
        justifyContent:'space-between',
        alignItems:'center',
        textAlign:'center',
        color:'#fff',
        fontSize:14,
      },
      footerTextBold:{
        fontWeight:'800',
        color:'#fff',
        fontSize:14,
      },
      footercadastro:{
       flexDirection:'row',
       justifyContent:'space-between',
      },
      footercadastroText:{
        fontSize:14,
        color:'#fff',
        fontWeight:'400',
      },
      footercadastroText1:{
        color:'#535353',
        left:10,
        fontWeight:'bold',
      }
})

export default styles;
