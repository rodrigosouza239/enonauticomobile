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
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
    color: "#222",
    width: "98%",
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
    marginTop: 8,
  },

  containerbox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 30,
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
  mainpastas: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    paddingHorizontal: 10,
  },
  mainpastasText: {
    color: "#FFD246",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 10,
  },

  alignView: {
    width: "100%",
    justifyContent: "center",
  },

  containerButton: {
    width: 102,
    marginTop: 32,
    marginHorizontal: "auto",
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD246",
  },
  containerButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
