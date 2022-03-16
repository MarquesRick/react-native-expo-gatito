import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Servicos from "./pages/Servicos";
import Carrinho from "./pages/Carrinho";
import { cores, Cores } from "./estilos";

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: cores.roxo,
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor: cores.roxo,
          tabBarInactiveBackgroundColor: cores.laranja,
          tabBarIconStyle: { display: "none" },
          style: {
            height: 70,
          },
          tabBarLabelStyle: {
            //position: "absolute",
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 21,
            backgroundColor: cores.laranja,
          },
          //esconde a navbarbottom qnd abre o teclado
          tabBarHideOnKeyboard: true,
          //esconde nome das screens no header
          headerShown: false,
        }}
      >
        <Tab.Screen name="Serviços" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
