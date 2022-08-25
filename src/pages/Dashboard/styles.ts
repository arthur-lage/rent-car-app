import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { COLORS } from "../../theme/COLORS";
import { FONTS } from "../../theme/FONTS";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20.3,
    marginHorizontal: 50,
    marginTop: getStatusBarHeight() + 13.84,
  },
  informationButton: {
    width: 100,
    paddingVertical: 2.85,
    marginRight: 60,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  informationText: {
    fontFamily: FONTS.barlowSemiBold,
    color: COLORS.text.black,
    fontSize: 16,
    paddingRight: 5,
    marginLeft: 10.85,
  },
  notificationsButton: {
    width: "100%",
    paddingVertical: 2.85,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  notificationsText: {
    fontSize: 16,
    fontFamily: FONTS.barlowSemiBold,
    color: COLORS.text.black,
    paddingRight: 5,
    marginLeft: 10.85,
  },
  nearestCarWrapper: {
    paddingHorizontal: 22,
    paddingVertical: 17,
    backgroundColor: COLORS.background.superLightGray,
    width: 319,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 22,
  },
  nearestCarText: {
    letterSpacing: 2.4,
    fontFamily: FONTS.barlowRegular,
    fontSize: 12,
    textTransform: "uppercase",
    color: COLORS.text.lightGray,
    marginBottom: 9.22,
  },
  nearestCarImage: {
    marginBottom: 3.22,
  },
  nearestCarName: {
    fontFamily: FONTS.barlowSemiBold,
    fontSize: 20,
    color: COLORS.text.darkGray,
    marginBottom: 8,
    letterSpacing: -0.32,
  },
  nearestCarFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nearestCarLeft: {
    display: "flex",
    flexDirection: "row",
  },
  nearestCarGPSWrapper: {
    display: "flex",
    flexDirection: "row",
    marginRight: 17,
  },
  nearestCarGPSText: {
    marginLeft: 4,
    fontSize: 12,
    color: COLORS.text.lightGray,
    fontFamily: FONTS.barlowRegular,
  },
  nearestCarGasolineWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  nearestCarGasolineText: {
    marginLeft: 4,
    fontSize: 12,
    color: COLORS.text.lightGray,
    fontFamily: FONTS.barlowRegular,
  },
  nearestCarPricePerHour: {
    fontFamily: FONTS.barlowSemiBold,
    color: COLORS.text.black,
    fontSize: 14,
  },
  profileAndMap: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 28,
    marginBottom: 22,
  },
  janeCooperProfile: {
    marginRight: 17,
    borderRadius: 20,
    paddingTop: 27,
    paddingHorizontal: 39,
    paddingBottom: 20,
    backgroundColor: COLORS.background.superLightGray,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  janeCooperImage: {
    marginBottom: 14,
  },
  janeCooperName: {
    marginBottom: 6,
    fontFamily: FONTS.barlowMedium,
    fontSize: 16,
    color: COLORS.text.black,
  },
  janeCooperMoney: {
    fontFamily: FONTS.barlowBold,
    color: COLORS.text.black,
    fontSize: 14,
  },
});
