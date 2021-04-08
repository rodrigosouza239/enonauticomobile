import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerbox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "16%",
    marginTop: "8%",
  },
  containerboxText: {
    fontSize: 23,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },

  main: {
    flexDirection:'column',
    alignSelf: "center",
    justifyContent:'center',
    width: "90%",
    marginBottom: 10
    // backgroundColor: "#000",
  },

  mainlogo: {
    width: 227,
    height: 118,
    marginBottom: 90,
  },

  mainInput2: {
    backgroundColor: "#fff",
    width:333,
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  mainInput3: {
    backgroundColor: "#fff",
    width:'98%',
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  mainInput4: {
    backgroundColor: "#fff",
    width:'98%',
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop:10
  },

  mainInput5: {
    backgroundColor: "#fff",
    width:'98%',
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  mainInput: {
    backgroundColor: "#fff",
    width:'98%',
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  mainInputText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
    marginTop:2,
    paddingHorizontal: 10,
    marginBottom:10
  },

  mainInputButton: {
      width: 102,
      marginTop: 12,
      marginHorizontal: "auto",
      height: 42,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFD246",
  },
  mainInputButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight:'bold'
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    top: "8%",
  },
  footerImg: {
    width: 133,
    height: 70,
  },
  footerTextBold: {
    fontWeight: "800",
    color: "#fff",
    fontSize: 14,
  },
  mainpastas: {
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
});

export default styles;
