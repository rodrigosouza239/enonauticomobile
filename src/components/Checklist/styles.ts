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
        marginTop:40,
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
      footer:{
        justifyContent:'center',
        alignItems:'center',
      },
      footerImg:{
        width:133,
        height:70
      },
      icon: {
        flexDirection: "row",
        alignItems:'center'
      },
      label: {
        margin: 8,
        color:'#fff',
        fontSize:14,
        fontWeight:'bold',
        left:5,
      },
})

export default styles;