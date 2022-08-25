import { TouchableOpacity, View } from "react-native";

import ArrowLeftIcon from "../../assets/images/arrow-left.svg";
import SettingsIcon from "../../assets/images/settings-icon.svg";

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
    </View>
  );
}
