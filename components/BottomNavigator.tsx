import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../app/screen/HomeScreen";
import LoanScreen from "../app/screen/LoanScreen";
import InsuranceScreen from "../app/screen/InsuranceScreen";
import WealthScreen from "../app/screen/WealthScreen";
import HistoryScreen from "../app/screen/HistoryScreen";
import { Colors } from "@/constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          paddingVertical: 25,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      {[
        {
          name: "home",
          component: HomeScreen,
          icon: require("../assets/images/userIcon.png"),
        },
        {
          name: "loan",
          component: LoanScreen,
          icon: require("../assets/images/bankIcon.png"),
        },
        {
          name: "insurence",
          component: InsuranceScreen,
          icon: require("../assets/images/bankIcon.png"),
        },
        {
          name: "wealth",
          component: WealthScreen,
          icon: require("../assets/images/checkBalanceIcon.png"),
        },
        {
          name: "history",
          component: HistoryScreen,
          icon: require("../assets/images/selfIcon.png"),
        },
      ].map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={focused ? styles.iconWrapperFocused : styles.iconWrapper}
              >
                <Image source={screen.icon} style={styles.iconSize} />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={focused ? styles.tabBarLabelActive : styles.tabBarLabel}
              >
                {screen.name}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const BottomNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    width: 30,
    height: 30,
    padding: 5,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16, // Increase gap between icon and label
  },
  iconWrapperFocused: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray", // Light gray background for focused state
    borderRadius: 50, // Border radius
    width: 60, // Adjust size as needed
    height: 60, // Adjust size as needed
    padding: 5, // Adjust size as needed
    marginTop: -50, // Adjust size as needed
    marginBottom: 16, // Increase gap between icon and label
  },
  tabBarLabel: {
    fontSize: 12,
    color: "white",
    fontWeight: "normal",
    textTransform: "capitalize",
  },
  tabBarLabelActive: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export default BottomNavigator;
