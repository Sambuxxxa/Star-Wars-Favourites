import {FC} from "react";
import {observer} from "mobx-react-lite";
import {styles} from "./HomeScreen.styles";
import {Text, View} from "react-native";
import formatDate from "../../utils/function/formatDate";
import {PersonType} from "./HomeScreen.types";

type PropsType = {
  selectedItem: PersonType | null
}

const ModalContent: FC<PropsType> = ({selectedItem}) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.row}>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Name</Text>
          <Text style={styles.itemText}>{selectedItem?.name}</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Birth Day</Text>
          <Text style={styles.itemText}>{selectedItem?.birth_year}</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Gender</Text>
          <Text style={styles.itemText}>{selectedItem?.gender}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Height</Text>
          <Text style={styles.itemText}>{selectedItem?.height}</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Mass</Text>
          <Text style={styles.itemText}>{selectedItem?.mass}</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Created</Text>
          <Text style={styles.itemText}>{formatDate(selectedItem?.created)}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Hair Color</Text>
          <Text style={styles.itemText}>{selectedItem?.hair_color}</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Skin Color</Text>
          <Text style={styles.itemText}>{selectedItem?.skin_color}</Text>
        </View>
        <View style={styles.itemBox}>
          <Text style={styles.itemText}>Eye Color</Text>
          <Text style={styles.itemText}>{selectedItem?.eye_color}</Text>
        </View>
      </View>
    </View>
  );
};


export default observer(ModalContent);
