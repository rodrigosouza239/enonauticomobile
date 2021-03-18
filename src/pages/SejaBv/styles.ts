import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD746',
        alignItems: 'center',
        justifyContent: 'center',
      },
      main:{
        justifyContent:'center',
        marginTop:-1,
        alignItems:'center',
      },
      footer:{
        justifyContent:'center',
        alignItems:'center',
        height:130,
        backgroundColor: '#FF984C'
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
      containermain:{
        textAlign:'center',
      },

      containerText:{
        fontWeight:'500',
        color:'#fff',
        fontSize:25,
        maxWidth:300,
        marginBottom:20,
      },
      containerText2:{
        fontWeight:'500',
        textAlign:'center',
        maxWidth:350,
        color:'#fff',
        fontSize:25,
      },
      containerText3:{
        fontWeight:'500',
        textAlign:'center',
        color:'#FFD246',
        fontSize:25,
      },
      containerButton:{
        width:120,
        marginTop:50,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF'
      },
      containerButtonText:{
        color:'#535353',
        fontWeight:'500',
        fontSize:20,
      },
})

export default styles;