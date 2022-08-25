import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";

import CarImage from "../../assets/images/car.png";

export function HomePage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={CarImage} />
      <Text style={styles.title}>Premium cars. Enjoy the luxury</Text>
      <Text style={styles.description}>
        Premium and prestige cars daily rental. Experience the thrill at a lower
        price
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Dashboard")}
        activeOpacity={0.8}
        style={styles.letsGoButton}
      >
        <Text style={styles.letsGoText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
}
