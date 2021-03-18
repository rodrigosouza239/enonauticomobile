import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
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
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "80%",
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
    width: "45%",
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  mainInput3: {
    backgroundColor: "#fff",
    width: "66.2%",
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  mainInput4: {
    backgroundColor: "#fff",
    width: "45%",
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  mainInput5: {
    backgroundColor: "#fff",
    width: "75%",
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  mainInput: {
    backgroundColor: "#fff",
    width: "56.2%",
    height: 40,
    // marginBottom: 8,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  mainInputText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 10,
    paddingHorizontal: 10,
  },

  mainInputButton: {
    top: "12%",
    backgroundColor: "#fff",
    width: 129,
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  mainInputButtonText: {
    fontSize: 16,
    color: "#535353",
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
    fontWeight: "bold",
    color: "#fff",
    fontSize: 14,
  },
  mainpastas: {
    flexDirection:'row',
    alignItems: "center",
    alignSelf:'center',
    justifyContent: "space-between",
    width: "60%",
    top: 30,
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

  ButtonSave: {
    width: 102,
    marginTop: 32,
    marginHorizontal: "auto",
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD246",
  },

});

export default styles;
