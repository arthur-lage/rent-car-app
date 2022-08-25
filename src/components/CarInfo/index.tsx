import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";

import GasolineMachineLight from "../../assets/images/gasoline-machine-light.svg";
import GPSIconLight from "../../assets/images/gps-icon-light.svg";

interface ISelectedCar {
  name: string;
  kilometers: number;
  gasoline: number;
  image: any;
  pricePerDay: number;
}

export function CarInfo({
  name,
  kilometers,
  gasoline,
  image,
  pricePerDay,
}: ISelectedCar) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.information}>
          <View style={styles.left}>
            <Text style={styles.carName}>{name}</Text>

            <View style={styles.gpsAndGasoline}>
              <View style={styles.gpsWrapper}>
                <GPSIconLight />
                <Text style={styles.gpsText}>&gt; 870km</Text>
              </View>

              <View style={styles.gasolineWrapper}>
                <GasolineMachineLight />
                <Text style={styles.gasolineText}>50L</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.main}>
          <Image style={styles.carImage} source={image} />
          <View style={styles.features}>
            <Text style={styles.featuresText}>Features</Text>

            <View>
              <View>
                {/* <GasolineIcon /> */}
                <Text>Diesel</Text>
                <Text>Common Rail Fuel Injection</Text>
              </View>
              <View></View>
              <View></View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>
              $<Text style={styles.price}>{pricePerDay}</Text>,00
            </Text>
            <Text style={styles.perDayText}>/day</Text>
          </View>
          <TouchableOpacity style={styles.bookNowButton} activeOpacity={0.35}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
