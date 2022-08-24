import { StyleSheet } from "react-native"
import { COLORS } from "../../theme/COLORS"
import { FONTS } from "../../theme/FONTS"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.darkBlue
  },
  title: {
    color: COLORS.text.white,
    fontSize: 35.2,
    marginBottom: 12,
    paddingLeft: 29,
    fontFamily: FONTS.barlowBold
  },
  description: {
    fontSize: 15,
    paddingLeft: 29,
    color: COLORS.text.gray,
    marginBottom: 43,
    fontFamily: FONTS.barlowRegular
  },
  letsGoButton: {
    borderRadius: 50,
    backgroundColor: COLORS.background.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: 319,
    alignSelf: "center"
  },
  letsGoText: {
    color: COLORS.text.darkGray,
    fontSize: 20,
    fontFamily: FONTS.barlowBold,
  }
})