import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      main:{
        justifyContent:'center',
        marginTop:80,
        alignItems:'center'
      },
      mainlogo:{
        width:227,
        height:118,
        marginBottom:90,
      },
      containerBack:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        padding:24,
        paddingTop:80,
       },
      mainInput:{
      justifyContent:'space-between',
      alignItems:'center',
      top:50
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
        borderRadius:14,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      },
      mainInputButtonText:{
        fontSize:16,
        color:'#535353'
      },
    
})

export default styles;