import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <View>
          <View style={styles.ImageRelative}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <Image
              source={require("../assets/images/indiaIcon.png")}
              style={styles.indiaIcon}
            />
          </View>
        </View>
        <View style={styles.flexColumn}>
          <Text style={styles.textBold}>Add Address</Text>
          <Text style={styles.text}>Welcome, User</Text>
        </View>
        <Image
          source={require("../assets/images/barcode.png")}
          style={styles.iconSize}
        />
        <Image
          source={require("../assets/images/bellIcon.png")}
          style={styles.iconSize}
        />
        <Image
          source={require("../assets/images/helpIcon.png")}
          style={styles.iconSize}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  ImageRelative: {
    position: "relative",
    width: 50,
    height: 50,
  },
  profileImage: {
    height: 50,
    width: 50,
    backgroundColor: "yellow",
    borderRadius: 10,
  },
  indiaIcon: {
    height: 30,
    width: 40,
    position: "absolute",
    bottom: -10,
    right: -20,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  text: {
    color: Colors.light.text,
    fontSize: 16,
  },
  textBold: {
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  iconSize: {
    width: 30,
    height: 30,
    color: "white",
  },
});

export default Header;
