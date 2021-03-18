import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  boxTitle: {
    alignItems: "center",
    marginTop: 8,
  },

  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },

  content: {
    alignItems: "center",
    marginTop: 8,
    maxHeight: "75%",
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

  alignView: {
    justifyContent: "space-between",
    alignItems: "center",
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
