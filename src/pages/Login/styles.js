import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: 200,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10
  },
  emailContainer: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    marginBottom: 20
  },
  emailInput: {
    height: 46,
    alignSelf: "stretch",
    paddingHorizontal: 15,
    color: '#FFF'
  },
  passwordContainer: {
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    marginBottom: 20

  },
  passwordInput: {
    height: 46,
    alignSelf: "stretch",
    paddingHorizontal: 15,
    color: '#FFF'
  },
  loginButton: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#f5f5f5",
    borderRadius: 23,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  loginButtonText: {
    color: "#8d8d8d",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerButton: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#ccc",
    borderRadius: 23,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  singUpText: {
    color: '#FFF',
    marginRight: 5,
    lineHeight: 22
  },
  registerButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
