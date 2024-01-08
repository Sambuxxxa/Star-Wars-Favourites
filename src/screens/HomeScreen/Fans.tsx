import {FC} from "react";
import {observer} from "mobx-react-lite";
import {styles} from "./HomeScreen.styles";
import {Text, TouchableOpacity, View} from "react-native";
import InfoStore from "../../store/InfoStore";
import Feather from "react-native-vector-icons/Feather";
import {Colors} from "../../config/Theme";

const Fans: FC = ({}) => {
  return (
    <View style={styles.fansBox}>
      <TouchableOpacity onPress={() => InfoStore.storeValue("fans", [])} style={styles.itemBox}>
        <Feather name="trash-2" size={24} color={Colors.red} />
      </TouchableOpacity>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>
          Female: {InfoStore.fans.filter(el => el?.gender === "female").length}
        </Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>
          Male: {InfoStore.fans.filter(el => el?.gender === "male").length}
        </Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>
          Other: {InfoStore.fans.filter(el => (el?.gender !== "male" && el?.gender !== "female")).length}
        </Text>
      </View>
    </View>
  );
};


export default observer(Fans);
