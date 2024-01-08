import {StyleSheet} from "react-native";
import {Colors} from "../../config/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg
  },
  itemContainer: {
    marginHorizontal: 10,
    height: 60,
    backgroundColor: Colors.main,
    marginVertical: 5,
    flexDirection: 'row',
    borderRadius: 10
  },
  itemBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemText: {
    color: Colors.accent,
    textAlign: 'center',
  },
  bottomBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 10
  },
  leftButton: {
    height: 40,
    width: 60,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.main,
  },
  rightButton: {
    height: 40,
    width: 60,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.main,
  },
  fansBox: {
    backgroundColor: Colors.main,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    flexDirection: 'row'
  },
  contentContainer: {
    backgroundColor: Colors.bg,
    flex: 1
  },
  handleStyle: {
    backgroundColor: Colors.bg,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13
  },
  handleIndicatorStyle: {
    backgroundColor: Colors.accent
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
})
