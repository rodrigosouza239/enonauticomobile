import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
    },

    header:{
      justifyContent:'center',
      alignItems:'center',
      alignSelf: 'center',
      padding: '4%',
      width: "76%",
      flexDirection: 'row',
      borderBottomColor: '#9F9A9A',
      borderBottomWidth: 1,
      height: '14%',
    },

    headerImage: {
      marginRight: '2%'
    },

    headerText: {
      fontSize:24,
      color:'#FFD246',
      fontWeight:'700',
    },

    content:{
      alignSelf:'center',
      height:'44%',
      width:'76%',
      marginBottom:'6%',
      marginTop:'4%',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },

    contentItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '8%',
      alignItems:'center',
    },

    contentItem1:{
      flexDirection: 'row',
      marginTop:8,
      justifyContent:'space-between',
      alignItems:'center',
      maxWidth:240,
    },

    textBold:{
      fontWeight: 'bold',
      fontSize:16,
      color:'#fff'
    },

    textItem:{
      color:'#FFD246',
      fontSize:14,
    },

    textItem1:{
      color:'#FFD246',
      fontSize:14,
      marginTop:5,
      marginLeft:10,
      textAlign:'right'
    },


    footer:{
      justifyContent:'center',
      alignItems:'center',
      height:130,
    },

    footerImg:{
      width:133,
      height:70
    }
})

export default styles;
