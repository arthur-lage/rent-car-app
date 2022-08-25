import { TouchableOpacity, View } from "react-native";

import ArrowLeftIcon from "../../assets/images/arrow-left.svg";
import SettingsIcon from "../../assets/images/settings-icon.svg";

import FortunerImage from '../../assets/images/fortuner-image.png'

import { CarInfo } from "../../components/CarInfo";

import { styles } from "./styles";

export function CarPage({ navigation }: any) {
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
      <CarInfo name="Fortuner GR" kilometers={870} gasoline={50} image={FortunerImage} pricePerDay={45}  />
    </View>
  );
}
