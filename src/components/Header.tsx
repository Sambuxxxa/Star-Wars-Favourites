import {StyleSheet, Text, View} from "react-native";
import {FC} from "react";
import {Colors} from "../config/Theme";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <AntDesign name="hearto" size={24} color={Colors.accent}/>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Name</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Birth Day</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Gender</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Colors.main,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  text: {
    color: Colors.accent,
    textAlign: 'center',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Header;
