import {FC} from "react";
import {Pressable, Text, TouchableOpacity, View} from "react-native";
import {observer} from "mobx-react-lite";
import InfoStore from "../../store/InfoStore";
import {styles} from "./HomeScreen.styles";
import {PersonType} from "./HomeScreen.types";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Colors} from "../../config/Theme";

type PropsType = {
  item: PersonType,
  handlePresentModalPress: Function
}

const Item: FC<PropsType> = ({item, handlePresentModalPress}) => {

  const addToFans = () => {
    if (InfoStore.fans.some(el => el?.name === item?.name)) {
      InfoStore.storeValue("fans", InfoStore.fans.filter(el => el?.name !== item?.name));
    } else {
      InfoStore.storeValue("fans", [item, ...InfoStore.fans]);
    }
  };

  return (
    <Pressable onPress={() => handlePresentModalPress(item)} style={styles.itemContainer}>
      <TouchableOpacity
        onPress={addToFans}
        style={styles.itemBox}>
        <AntDesign
          size={24}
          name={"heart"}
          color={InfoStore.fans.some(el => el?.name === item?.name) ? Colors.accent : Colors.active}/>
      </TouchableOpacity>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>{item?.name}</Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>{item?.birth_year}</Text>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.itemText}>{item?.gender}</Text>
      </View>
    </Pressable>
  );
};


export default observer(Item);
