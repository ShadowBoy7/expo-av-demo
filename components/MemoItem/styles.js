import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 50,
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: "#555",
    borderRadius: 10,
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    backgroundColor: "orange",
  },
});

export default styles;
