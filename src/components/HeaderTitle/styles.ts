import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 10 + Constants.statusBarHeight,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#FFf",
    fontWeight: "bold",
    fontSize: 22,
    marginRight: 12,
  },
});
