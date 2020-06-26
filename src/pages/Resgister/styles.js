import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  form: {
    justifyContent: "center",
    padding: 30,
  },

  backText: {
    marginLeft: 2,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    color: "#009dff",
  },

  logo: {
    width: 175,
    height: 45,
    resizeMode: "contain",
    alignSelf: "center",
  },

  input: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    paddingHorizontal: 15,
    marginTop: 15,
  },

  bottom: {
    paddingHorizontal: 30,
    marginBottom: 50,
  },

  date: {
    flexDirection: "row",
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginTop: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },

  calendar: {
    alignSelf: "center",
  },

  datePicker: {
    backgroundColor: "#FFF",
    width: "100%",
  },

  checkTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#999",
  },

  okButton: {
    backgroundColor: "#fff",
    alignItems: "flex-end",
    marginTop: 5,
  },

  okText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#61a8fa",
    marginRight: 20,
    marginTop: 5,
  },

  submmit: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#f57f29",
    borderRadius: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  submmitText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
