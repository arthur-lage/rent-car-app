import { TouchableOpacity, View, Image } from "react-native";

import ArrowLeftIcon from "../../assets/images/arrow-left.svg";
import SettingsIcon from "../../assets/images/settings-icon.svg";

import { CarInfo } from "../../components/CarInfo";

import { styles } from "./styles";

import FullMap from "../../assets/images/map.png";

export function CarPage({ route, navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.35}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.35}>
          <SettingsIcon />
        </TouchableOpacity>
      </View>

      <Image style={styles.fullMap} source={FullMap} />

      <CarInfo
        name={route.params.name}
        gasoline={route.params.gasoline}
        battery={route.params.battery}
        image={route.params.image}
        kilometers={route.params.kilometers}
        pricePerDay={route.params.pricePerDay}
      />
    </View>
  );
}
