import {FC, useEffect} from "react";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import InfoStore from "./src/store/InfoStore";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {StatusBar} from "react-native";

const App: FC = () => {

  useEffect(() => {
    InfoStore.getValue("fans", [])
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <HomeScreen/>
        <StatusBar barStyle={'light-content'}/>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
