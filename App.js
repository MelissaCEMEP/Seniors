import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import TelaPrincipal from "./pages/Principal";
import Emergencia from "./pages/Emergencia";
import Jogos from "./pages/Jogos";
import Remedios from "./pages/Remedios";
import Videos from "./pages/Videos";
import Calendario from "./pages/Calendario";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Principal" component={TelaPrincipal} />
          <Stack.Screen name="Emergencia" component={Emergencia} />
          <Stack.Screen name="Jogos" component={Jogos} />
          <Stack.Screen name="Remedios" component={Remedios} />
          <Stack.Screen name="Videos" component={Videos} />
          <Stack.Screen name="Calendario" component={Calendario} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
