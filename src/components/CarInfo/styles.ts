import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/COLORS";
import { FONTS } from "../../theme/FONTS";

export const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
  },
  header: {
    backgroundColor: COLORS.background.superDarkBlue,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 75,
    position: "relative",
    bottom: -50,
    paddingLeft: 28,
    paddingTop: 25.41,
  },
  contentWrapper: {
    backgroundColor: COLORS.background.white,
    display: "flex",

    flexDirection: "column",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  main: {
    paddingTop: 22,
    paddingLeft: 28,
    marginBottom: 32,
  },
  information: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  carName: {
    fontSize: 24,
    fontFamily: FONTS.barlowSemiBold,
    letterSpacing: -0.32,
    color: COLORS.text.white,
    marginBottom: 9.59,
  },
  carImage: {
    position: "absolute",
    right: 10,
    top: -60,
    zIndex: 10,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 30,
    paddingBottom: 11.37,
    paddingRight: 28,
    backgroundColor: COLORS.background.white,
  },
  priceWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  priceText: {
    color: COLORS.text.priceColor,
    fontFamily: FONTS.barlowRegular,
    fontSize: 33.71,
  },
  price: {
    color: COLORS.text.priceColor,
    fontFamily: FONTS.barlowBold,
  },
  perDayText: {
    fontSize: 14.98,
    alignSelf: "flex-end",
    paddingBottom: 5,
    fontFamily: FONTS.barlowRegular,
    color: COLORS.text.priceColor,
  },
  bookNowButton: {
    paddingHorizontal: 38,
    paddingVertical: 17.5,
    backgroundColor: COLORS.background.black,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 147,
    height: 54,
    borderRadius: 50,
  },
  bookNowText: {
    color: COLORS.text.white,
    fontSize: 16,
    fontFamily: FONTS.barlowSemiBold,
  },
  featuresText: {
    fontSize: 20,
    fontFamily: FONTS.barlowBold,
    color: COLORS.text.priceColor,
    marginBottom: 14,
  },
  gpsAndGasoline: {
    display: "flex",
    flexDirection: "row",
  },
  gpsWrapper: {
    display: "flex",
    flexDirection: "row",
    marginRight: 15,
  },
  gpsText: {
    marginLeft: 6,
    color: COLORS.text.moreCarsText,
  },
  gasolineWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  gasolineText: {
    marginLeft: 6,
    color: COLORS.text.moreCarsText,
  },
  features: {},
});
