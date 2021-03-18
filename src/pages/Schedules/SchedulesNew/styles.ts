import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    marginBottom: 30,
    marginTop: "10%",
    width: "64%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerImage: {},
  headerText: {
    fontSize: 32,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },
  mainPage: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainPageForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: '60%',
    marginBottom: '6%'
  },
  mainText: {
    fontSize: 18,
    color: "#ffff",
    // top: 5,
    fontWeight: "700",
  },
  mainTextInput: {
    backgroundColor: "#fff",
    width: "60%",
    textAlign:'center',
    fontWeight:'bold',
    padding: '2%',
    // height: "100%",
    color: "#222",
    left: 10,
    // marginBottom: 15,
    borderRadius: 9,
  },

  mainInputText: {
    height: 150,
    textAlignVertical: "top",
    width: 300,
    marginTop: 10,
    // paddingHorizontal: 20,
    paddingTop: 20,
    padding: "10%",
    color: "#222",
    backgroundColor: "#fff",
    paddingHorizontal: "2%",
    borderRadius: 8,
  },
  mainInputTextEsqueceuText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  mainInputButton: {
    backgroundColor: "#FFD246",
    width: 100,
    height: 40,
    marginBottom: 20,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  mainInputButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#fff",
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    marginTop: "4%",
  },

  footerImg: {
    width: 133,
    height: 70,
  },

  mainInputTextObs: {
    color: "#FFD246",
    fontWeight: "500",
    fontSize: 20,
    marginTop: "4%",
  },

  mainpastas: {
    alignItems: "center",
    justifyContent: "center",
    top: 30,
    // backgroundColor:"#FFD246"
  },
});

export default styles;
