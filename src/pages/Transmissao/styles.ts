import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
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
        marginTop:30
      },
      containerboxText:{
       fontSize:23,
       color:'#FFD246',
       fontWeight:'700',
       paddingHorizontal:10,
      },
      main:{
        flexDirection:'row',
        justifyContent:'center'
      },

      mainBox:{
        alignSelf:'center',
        marginTop: '8%',
        alignItems:'center',
        height:'46%'
      },

      text:{
        fontSize:18,
        // backgroundColor:'#333',
        maxWidth: "60%",
        textAlign:'center',
        color:'#FFf',
        fontWeight:'bold',
      },

      icon:{
        marginTop: '8%'
      },


      mainText:{
        fontSize:18,
       color:'#FFD246',
       marginTop:80,
       marginBottom:10,
       fontWeight:'700',
      },

      header:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        padding: '4%',
        width: "76%",
        borderBottomColor: '#9F9A9A',
        borderBottomWidth: 1,
        // height: '14%',
      },

      headerText: {
        fontSize:24,
        color:'#FFD246',
        fontWeight:'700',
      },

      footer:{
        justifyContent:'center',
        alignItems:'center',
        height:130,
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
