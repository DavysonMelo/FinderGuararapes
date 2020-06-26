import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Constants.statusBarHeight,
  },

  back: {
    position: "absolute",
    zIndex: 1,
    padding: 7,
    top: Constants.statusBarHeight,
  },

  photos: {
    width: "100%",
    height: "70%",
    alignSelf: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: "5%",
    marginBottom: 20,
    color: "#454545",
  },

  title: {
    fontSize: 17,
    color: "#525252",
    marginLeft: "5%",
  },

  bio: {
    marginTop: 10,
    marginLeft: "5%",
    color: "#757575",
  },
});
