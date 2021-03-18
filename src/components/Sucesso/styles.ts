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
        marginTop:300,
      },
      mainText:{
        fontSize:18,
       color:'#ffff',
       top:5,
       fontWeight:'700',
      },
      footer:{
        justifyContent:'center',
        alignItems:'center',
        height:130,
        top:250,
      },
      footerImg:{
        width:133,
        height:70
      },
      mainInputTextObs:{
        color:'#FFD246',
        fontWeight:'bold',
        fontSize:20,
        left:10
      },
})

export default styles;