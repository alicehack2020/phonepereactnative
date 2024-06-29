import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import LoanScreen from "./LoanScreen";
import InsuranceScreen from "./InsuranceScreen";
import WealthScreen from "./WealthScreen";
import HistoryScreen from "./HistoryScreen";

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/userIcon.png")}
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="loan"
        component={LoanScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/bankIcon.png")}
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="insurence"
        component={InsuranceScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/bankIcon.png")}
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="wealth"
        component={WealthScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/checkBalanceIcon.png")}
              style={styles.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/selfIcon.png")}
              style={styles.iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    width: 30,
    height: 30,
  },
});

export default BottomNavigator;
