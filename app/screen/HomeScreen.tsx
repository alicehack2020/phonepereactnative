import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Banner from "@/components/Banner";
import TransferMoney from "@/components/TransferMoney";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <TransferMoney/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
