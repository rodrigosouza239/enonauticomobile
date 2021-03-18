import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:32,
    paddingTop: 10,
  },
  containerbox: {
    marginBottom: 30,
    marginTop: "18%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerboxImage: {},
  containerboxText: {
    fontSize: 23,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },
  mainPage: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 22,
    color: "#FFD246",
    marginTop: "12%",
    marginBottom: "8%",
    fontWeight: "700",
  },

  mainInputButton: {
    backgroundColor: "#fff",
    width: 120,

    height: 46,

    marginBottom: 20,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  mainInputButtonText: {
    fontSize: 12,
    color: "#535353",
    fontWeight: "bold",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    top: "10%",
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
