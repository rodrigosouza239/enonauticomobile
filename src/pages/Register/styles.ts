import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      main:{
        justifyContent:'center',
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
       marginLeft:150,
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
      containerBack:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        padding:24,
        paddingTop:44,
       },
       containerbox:{
         flexDirection:'row',
         justifyContent:'center',
         marginBottom:30,
         marginTop:120
       },
})

export default styles;