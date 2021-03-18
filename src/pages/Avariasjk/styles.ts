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
        alignItems:'flex-start'
      },
      mainText:{
        fontSize:18,
       color:'#FFD246',
       marginTop:40,
       marginBottom:10,
       fontWeight:'700',
      },
     
      mainInputText:{
        height:150,
        width:330,
        top:10,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        borderRadius:8,
      },

      mainInputButton:{
        backgroundColor:'#FFD246',
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
        top:60,
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

      containerButton:{
        width:120,
        marginTop:50,
        height:50,
        borderRadius:10,
        marginLeft:110,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFD246'
      },
      containerButtonText:{
        color:'#000',
        fontWeight:'500',
        fontSize:20,
      },
})

export default styles;