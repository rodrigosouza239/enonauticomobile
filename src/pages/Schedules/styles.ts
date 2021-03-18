import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },

  boxTitle: {
    alignItems: "center",
    marginTop: 4,
  },

  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },

  content: {
    alignItems: "center",
    marginTop: 8,
    maxHeight: "80%",
  },

  boxItem: {
    backgroundColor: "#fff",
    width: 364,
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  contentItem: {},

  textItem: {
    maxWidth: 220,
    marginTop: 8,
    fontSize: 11,
    color: "#000",
    textTransform: "uppercase",
  },
  textBold: {
    fontWeight: "bold",
  },

  textItemParagrafo: {
    maxWidth: 220,
    marginTop: 8,
    fontSize: 11,
    color: "#000",
    lineHeight: 17,
  },

  tagBox: {
    backgroundColor: "#FFD246",
    width: 102,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  tagText: { fontSize: 11, color: "#000", fontWeight: "bold" },
});

export default styles;
