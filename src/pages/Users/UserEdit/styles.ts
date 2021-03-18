import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  titleContainer: {
    alignItems: "center",
  },

  titleText: {
    color: "#eee",
    fontWeight: "bold",
    fontSize: 26,
  },

  mainPageForm: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "18%",
    height: "32%",
    width: "72%",
    alignSelf: "center",
    // backgroundColor: "#7159c2",
  },

  fieldInput: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "6%",
  },

  fieldInputText: {
    color: "#fff",
    fontSize: 16,
    width: "25%",
  },

  fieldInputTextInputNome: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
    height: "100%",
    color: "#222",
    width: "80%",
  },

  fieldInputTextInputProprietario: {
    backgroundColor: "#fff",
    borderColor: "transparent",
    borderRadius: 12,
    fontSize: 16,
    color: "#222",
    width: "80%",
    alignItems: "center",
  },

  fieldInputTextInputProprietarioPicker: {
    backgroundColor: "#fff",
    color: "#222",
    width: "90%",
    height: 38,
  },


  containerButtons: {
    marginHorizontal: "auto",
    flexDirection: "row",
    marginTop: "8%",
    // width: "72%",
    width: "52%",

    // backgroundColor: "#444",
    justifyContent: "center",
    alignSelf: "center",
  },

  ButtonChangePassword: {
    width: 102,
    marginTop: 32,
    height: 42,
    paddingHorizontal: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD246",
  },

  ButtonDelete: {
    width: 102,
    marginTop: 32,
    height: 42,
    paddingHorizontal: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE4000",
  },

  ButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign:"center",
    fontSize: 16,
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    top: "6%",
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
});

export default styles;
