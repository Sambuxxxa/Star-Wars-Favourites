import {FC, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {FlatList, RefreshControl, SafeAreaView, TouchableOpacity, View} from "react-native";
import {observer} from "mobx-react-lite";
import {styles} from "./HomeScreen.styles";
import InfoStore from "../../store/InfoStore";
import Item from "./Item";
import {PersonType} from "./HomeScreen.types";
import Header from "../../components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Colors} from "../../config/Theme";
import Fans from "./Fans";
import {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";
import ModalContent from "./ModalContent";

const HomeScreen: FC = ({}) => {
  const [refreshing, setRefreshing] = useState(true);
  const [selectedItem, setSelectedItem] = useState<null | PersonType>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [200, 301], []);

  useEffect(() => {
    InfoStore.getPersons(() => setRefreshing(false))
  }, []);

  const handlePresentModalPress = useCallback((item: PersonType) => {
    setSelectedItem(item)
    bottomSheetModalRef.current?.present();
  }, []);

  const getValue = (url?: string | null) => {
    if (url !== null) {
      setRefreshing(true)
      InfoStore.getPersons(() => setRefreshing(false), url)
    }
  }

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.5}/>
    ),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <Fans/>
      <Header/>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor="#fff"
            titleColor="#fff"
            refreshing={refreshing}
            onRefresh={() => getValue(InfoStore.lastURL)}/>
        }
        data={InfoStore.persons?.results}
        renderItem={({item, index}: { item: PersonType, index: number }) =>
          <Item handlePresentModalPress={handlePresentModalPress} item={item} key={index}/>}/>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          onPress={() => getValue(InfoStore?.persons?.previous)}
          style={styles.leftButton}>
          <AntDesign name="arrowleft" size={24} color={InfoStore.persons?.previous ? Colors.accent : Colors.active}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getValue(InfoStore?.persons?.next)}
          style={styles.rightButton}>
          <AntDesign name="arrowright" size={24} color={InfoStore.persons?.next ? Colors.accent : Colors.active}/>
        </TouchableOpacity>
      </View>
      <BottomSheetModal
        index={1}
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        handleStyle={styles.handleStyle}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.handleIndicatorStyle}>
        <ModalContent selectedItem={selectedItem}/>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
