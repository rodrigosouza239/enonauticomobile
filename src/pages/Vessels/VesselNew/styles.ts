import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },

  fieldInput: {
    flexDirection:'column',
    alignSelf: "center",
    justifyContent:'center',
    width: "90%",
    marginBottom: 10
  },

  fieldInputText: {
    color: "#fff",
    fontSize: 18,
  },

  fieldInputTextInputNome: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
    color: "#222",
    width: "98%",
  },

  fieldInputTextInputProprietario: {
    backgroundColor: "#fff",
    borderColor: "transparent",
    borderRadius: 12,
    fontSize: 16,
    color: "#222",
    width: "98%",
    alignItems: "center",
  },

  fieldInputTextInputProprietarioPicker: {
    backgroundColor: "#fff",
    color: "#222",
    width: "98%",
    height: 38,
  },

  fieldInputTextInputMarca: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: "#222",
    fontSize: 16,
    width: "98%",
  },

  fieldInputTextInputModelo: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    color: "#222",
    paddingVertical: 4,
    fontSize: 16,
    width: "98%",
  },

  fieldInputTextInputAno: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    color: "#222",
    paddingVertical: 4,
    fontSize: 16,
    width: "98%",
  },

  fieldInputTextInputComprimentoTotal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    color: "#222",
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
    width: "98%",
  },

  fieldInputTextInputMotor: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    color: "#222",
    paddingVertical: 4,
    fontSize: 16,
    width: "98%",
  },

  fieldInputTextInputCapacidadeDeCombustivel: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: "#222",
    fontSize: 16,
    width: "98%",
  },

  forms: {
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    marginTop: "18%",
  },

  containerbox: {
    flexDirection: "row",
    justifyContent: "center",
    // marginBottom: "4%",
    // marginTop: "4%",
  },

  containerboxText: {
    fontSize: 23,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
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

  containerButtons: {
    marginHorizontal: "auto",
    flexDirection: "row",
    marginTop: "8%",
    width: "52%",
    justifyContent: "center",
    alignItems: "center",
  },

  ButtonSave: {
    width: 102,
    // marginTop: 32,
    marginHorizontal: "auto",
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD246",
  },

  ButtonDelete: {
    width: 102,
    marginTop: 32,
    marginHorizontal: "auto",
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE4000",
  },

  ButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
