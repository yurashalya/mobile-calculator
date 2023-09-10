import { StyleSheet } from "react-native";
import { mainColors } from "../constants";

export const Styles = StyleSheet.create({
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mainColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mainColors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mainColors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: mainColors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: mainColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: mainColors.black,
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: mainColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: mainColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
