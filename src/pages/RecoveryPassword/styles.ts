import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  main: {
    justifyContent: "center",
    marginTop: "10%",
    alignItems: "center",
  },
  mainlogo: {
    width:227,
    height:128,
    marginBottom:90,
  },

  mainInput: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "78%",
  },
  mainInputText: {
    backgroundColor: "#fff",
    height: 60,
    width: "100%",
    marginBottom: 20,
    borderRadius: 14,
    fontSize: 16,
    paddingHorizontal: 20,
  },

  mainInputButton: {
    backgroundColor: "#fff",
    width: "46%",
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  mainInputButtonText: {
    fontSize: 16,
    color: "#FFD246",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default styles;
