import { StyleSheet } from "react-native";
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
    marginTop: 13.84
  },
  informationButton: {
    width: 100,
    paddingRight: 9.21,
    paddingVertical: 2.85,
    marginRight: 26.24,
  },
  informationIcon: {
    marginRight: 10.85,
  },
  informationText: {
    fontFamily: FONTS.barlowSemiBold,
    color: COLORS.text.black,
    fontSize: 16,
  },
  notificationsButton: {
    width: 100,
    paddingVertical: 2.85,
  },
  notificationsIcon: {
    marginRight: 10.85,
  },
  notificationsText: {
    fontSize: 16,
    fontFamily: FONTS.barlowSemiBold,
    color: COLORS.text.black,
  },
  nearestCarWrapper: {
    paddingHorizontal: 22,
    paddingVertical: 17,
    backgroundColor: COLORS.background.superLightGray,
    width: 319,
    alignSelf: "center",
    borderRadius: 20
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
  nearestCarGPSIcon: {
    marginRight: 4,
  },
  nearestCarGPSText: {
    fontSize: 12,
    color: COLORS.text.lightGray,
    fontFamily: FONTS.barlowRegular,
  },
  nearestCarGasolineWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  nearestCarGasolineIcon: {
    marginRight: 4,
  },
  nearestCarGasolineText: {
    fontSize: 12,
    color: COLORS.text.lightGray,
    fontFamily: FONTS.barlowRegular,
  },
  nearestCarPricePerHour: {
    fontFamily: FONTS.barlowSemiBold,
    color: COLORS.text.black,
    fontSize: 14,
  },
});
