import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      main:{
        justifyContent:'center',
        alignItems:'center',
      },
      Viewmenu:{
       flexDirection:'row',
       marginTop:8,
       marginBottom:1,
      },
      item:{
        height:130,
        width:130,
        backgroundColor:'#000',
        borderRadius:10,
        paddingHorizontal:16,
        paddingTop:20,
        paddingBottom:16,
        marginRight:8,
        alignItems:'center',
        justifyContent:'space-between',

        textAlign:'center'
      },
      itemTitle:{
        textAlign:'center',
        fontSize:13,
        color:'#fff',
        width: 120,
        fontWeight:'600',
      },
      footer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
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
