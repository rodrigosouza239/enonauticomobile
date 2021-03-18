import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },

  titleBox: {
    justifyContent: "center",
    alignSelf: "center",
  },

  titleText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
  },

  header: {
    justifyContent: "center",
    height: 130,
    top: 60,
    alignSelf: "center",
  },

  headerImg: {
    width: 133,
    height: 70,
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16%",
  },

  textInput: {
    height: 150,
    width: 330,
    top: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 8,
    textAlignVertical: "top",
  },

  containerButtons: {
    marginHorizontal: "auto",
    flexDirection: "row",
    marginTop: "8%",
    width: "52%",
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
    fontSize: 16,
  },
});

export default styles;
