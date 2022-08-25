import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";

import InformationIcon from "../../assets/images/info.svg";
import NotificationIcon from "../../assets/images/bell.svg";
import GasolineMachine from "../../assets/images/gasoline-machine.svg";
import GPSIcon from "../../assets/images/gps-icon.svg";
import GasolineMachineLight from "../../assets/images/gasoline-machine-light.svg";
import GPSIconLight from "../../assets/images/gps-icon-light.svg";
import BatteryIconLight from "../../assets/images/battery-icon-light.svg";
import ThreeDots from "../../assets/images/three-dots.svg";
import ArrowRight from "../../assets/images/arrow-right.svg";

import FortunerGRImage from "../../assets/images/fortunerGR.png";
import JaneCooper from "../../assets/images/jane-cooper.png";
import MapIcon from "../../assets/images/maps-icon.png";
import FortunerImage from "../../assets/images/fortuner-image.png";
import CorollaImage from "../../assets/images/corolla-cross-image.png";
import Ioniq5Image from "../../assets/images/ioniq-5-image.png";

export function Dashboard({ navigation }: any) {
  const availableCars = [
    {
      name: "Fortuner GR",
      kilometers: 870,
      gasoline: 50,
      battery: null,
      image: FortunerImage,
      pricePerDay: 45,
    },
    {
      name: "Corolla Cross",
      kilometers: 4,
      battery: null,
      gasoline: 50,
      image: CorollaImage,
      pricePerDay: 45,
    },
    {
      name: "Ionic 5",
      kilometers: 8,
      gasoline: null,
      battery: 80,
      image: Ioniq5Image,
      pricePerDay: 45,
    },
  ];

  function handleShowCar(index: number) {
    navigation.navigate("CarPage", {
      name: availableCars[index].name,
      kilometers: availableCars[index].kilometers,
      gasoline: availableCars[index].gasoline,
      battery: availableCars[index].battery,
      image: availableCars[index].image,
      pricePerDay: availableCars[index].pricePerDay,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity activeOpacity={0.35} style={styles.informationButton}>
          <InformationIcon />
          <Text style={styles.informationText}>Information</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.35}
          style={styles.notificationsButton}
        >
          <NotificationIcon />
          <Text style={styles.notificationsText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => handleShowCar(0)}
        activeOpacity={0.35}
        style={styles.nearestCarWrapper}
      >
        <Text style={styles.nearestCarText}>Nearest Car</Text>
        <Image source={FortunerGRImage} style={styles.nearestCarImage} />
        <Text style={styles.nearestCarName}>Fortuner GR</Text>
        <View style={styles.nearestCarFooter}>
          <View style={styles.nearestCarLeft}>
            <View style={styles.nearestCarGPSWrapper}>
              <GPSIcon />
              <Text style={styles.nearestCarGPSText}>&gt; 870km</Text>
            </View>

            <View style={styles.nearestCarGasolineWrapper}>
              <GasolineMachine />
              <Text style={styles.nearestCarGasolineText}>50L</Text>
            </View>
          </View>

          <Text style={styles.nearestCarPricePerHour}>$45,00/h</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.profileAndMap}>
        <TouchableOpacity activeOpacity={0.35} style={styles.janeCooperProfile}>
          <Image style={styles.janeCooperImage} source={JaneCooper} />
          <Text style={styles.janeCooperName}>Jane Cooper</Text>
          <Text style={styles.janeCooperMoney}>$ 4,253</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.35} style={styles.mapButton}>
          <Image source={MapIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.moreCarsWrapper}>
        <View style={styles.moreCarsHeader}>
          <Text style={styles.moreCarsText}>More Cars</Text>
          <TouchableOpacity activeOpacity={0.4}>
            <ThreeDots />
          </TouchableOpacity>
        </View>
        <View style={styles.carsContainer}>
          <View style={styles.carOptionGasoline}>
            <View style={styles.moreCarsLeft}>
              <Text style={styles.moreCarsCarName}>Corolla Cross</Text>
              <View style={styles.moreCarsFooter}>
                <View style={styles.moreCarsGPSWrapper}>
                  <GPSIconLight />
                  <Text style={styles.moreCarsGPSText}>&gt; 4km</Text>
                </View>
                <View style={styles.moreCarsGasolineWrapper}>
                  <GasolineMachineLight />
                  <Text style={styles.moreCarsGasolineText}>50L</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleShowCar(1)}
              style={styles.moreCarsChooseCar}
            >
              <ArrowRight />
            </TouchableOpacity>
          </View>

          <View style={styles.divisor}></View>

          <View style={styles.carOptionBattery}>
            <View style={styles.moreCarsLeft}>
              <Text style={styles.moreCarsCarName}>Ionic 5</Text>
              <View style={styles.moreCarsFooter}>
                <View style={styles.moreCarsGPSWrapper}>
                  <GPSIcon />
                  <Text style={styles.moreCarsGPSText}>&gt; 8km</Text>
                </View>
                <View style={styles.moreCarsBatteryWrapper}>
                  <BatteryIconLight />
                  <Text style={styles.moreCarsBatteryText}>80%</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleShowCar(2)}
              style={styles.moreCarsChooseCar}
            >
              <ArrowRight />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
