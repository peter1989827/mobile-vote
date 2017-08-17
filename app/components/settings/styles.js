import { StyleSheet, Dimensions } from "react-native";
import { Constants } from "expo";

const { width } = Dimensions.get("window");
const colWidth = width / 2;
const valueWidth = width / 3 + 80;
const labelWidth = width / 3 - 20;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff"
  },
  items: {
    padding: 16
  },
  headLabel: {
    fontSize: 16,
    fontWeight: "600"
  },
  item: {
    marginTop: 10,
    flexDirection: "row",
    height: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: "600",
    width: labelWidth
  },
  itemValue: {
    width: valueWidth
  },
  itemLink: {
    textDecorationLine: "underline",
    color: "#2D61A4"
  },
  description: {
    marginTop: 16,
    marginBottom: 16
  },
  row: {
    flexDirection: "row"
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
    width: colWidth
  },
  switch: {
    marginTop: -10,
    marginLeft: 16
  }
});

export default styles;
