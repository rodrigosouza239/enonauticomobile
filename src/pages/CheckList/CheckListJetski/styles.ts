import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },

  content: {
    marginLeft: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  containerbox: {
    marginBottom: 30,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  containerboxText: {
    fontSize: 23,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    margin: 8,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    left: 5,
  },

  scrollviewBox: {
    height: "60%",
    width: "90%",
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
  },

  containerButton: {
    padding: 12,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD246",
  },

  containerButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default styles;
