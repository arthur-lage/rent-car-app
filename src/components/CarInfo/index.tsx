import { Text, TouchableOpacity, View, Image } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { styles } from "./styles";

import GasolineMachineLight from "../../assets/images/gasoline-machine-light.svg";
import GPSIconLight from "../../assets/images/gps-icon-light.svg";
import BatteryIconLight from "../../assets/images/battery-icon-light.svg";
import FeatureGasoline from '../../assets/images/feature-gasoline.svg'
import FeatureSpeed from '../../assets/images/feature-speed.svg'
import FeatureCoolSeat from '../../assets/images/feature-cool-seat.svg'
import FeatureBattery from '../../assets/images/feature-battery.svg'

import XCircle from "../../assets/images/x-circle.svg";

interface ISelectedCar {
  name: string;
  kilometers: number;
  gasoline?: number;
  battery?: number;
  image: any;
  pricePerDay: number;
}

export function CarInfo(data: ISelectedCar) {  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.35} style={styles.closeButton}>
          <XCircle />
        </TouchableOpacity>

        <View style={styles.information}>
          <View style={styles.left}>
            <Text style={styles.carName}>{data.name}</Text>

            <View style={styles.gpsAndGasoline}>
              <View style={styles.gpsWrapper}>
                <GPSIconLight />
                <Text style={styles.gpsText}>&gt; {data.kilometers}km</Text>
              </View>

              <View style={styles.gasolineWrapper}>
                {data.gasoline ? (
                  <GasolineMachineLight />
                ) : (
                  <BatteryIconLight />
                )}
                <Text style={styles.gasolineText}>
                  {data.gasoline ? `${data.gasoline}L` : `${data.battery}%`}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.main}>
          <Image style={styles.carImage} source={data.image} />
          <View style={styles.features}>
            <Text style={styles.featuresText}>Features</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
              contentContainerStyle={{ paddingHorizontal: 12 }}
            >
              <View style={styles.feature}>
                {data.gasoline ? (
                  <>
                    <FeatureGasoline />

                    <Text style={styles.featureName}>Diesel</Text>
                    <Text style={styles.featureDesc}>Common Rail Fuel Injection</Text>
                  </>
                ) : (
                  <>
                    <FeatureBattery />

                    <Text style={styles.featureName}>Battery</Text>
                    <Text style={styles.featureDesc}>Electric Car Battery</Text>
                  </>
                )}
              </View>
              <View style={styles.feature}>
                <FeatureSpeed />
                <Text style={styles.featureName}>Acceleration</Text>
                <Text style={styles.featureDesc}>0 - 100km / 11s</Text>
              </View>
              <View style={styles.feature}>
              <FeatureCoolSeat />
                <Text style={styles.featureName}>Cool Seat</Text>
                <Text style={styles.featureDesc}>Temp Control on seat</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>
              $<Text style={styles.price}>{data.pricePerDay}</Text>,00
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
