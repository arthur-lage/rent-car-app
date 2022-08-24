import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";

import InformationIcon from "../../assets/images/info.svg";
import NotificationIcon from "../../assets/images/bell.svg";
import FortunerGRImage from "../../assets/images/fortunerGR.png";
import GPSIcon from "../../assets/images/gps-icon.svg";
import GasolineMachine from "../../assets/images/gasoline-machine.svg";

export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.informationButton}>
          <Text style={styles.informationText}>Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationsButton}>
          <Text style={styles.notificationsText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nearestCarWrapper}>
        <Text style={styles.nearestCarText}>Nearest Car</Text>
        <Image source={FortunerGRImage} style={styles.nearestCarImage} />
        <Text style={styles.nearestCarName}>Fortuner GR</Text>
        <View style={styles.nearestCarFooter}>
          <View style={styles.nearestCarLeft}>
            <View style={styles.nearestCarGPSWrapper}>
              <Text style={styles.nearestCarGPSText}>&gt; 870km</Text>
            </View>

            <View style={styles.nearestCarGasolineWrapper}>
              <Text style={styles.nearestCarGasolineText}>50L</Text>
            </View>
          </View>

          <Text style={styles.nearestCarPricePerHour}>$45,00/h</Text>
        </View>
      </View>
    </View>
  );
}
