import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const TransferMoney = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>TransferMoney</Text>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.card}>
            <Image
              source={require("../assets/images/userIcon.png")}
              style={styles.iconSize}
            />
          </View>
          <Text style={styles.text}>To Mobile Number</Text>
        </View>
        <View>
          <View style={styles.card}>
            <Image
              source={require("../assets/images/bankIcon.png")}
              style={styles.iconSize}
            />
          </View>
          <Text style={styles.text}>To Mobile Number</Text>
        </View>
        <View>
          <View style={styles.card}>
            <Image
              source={require("../assets/images/selfIcon.png")}
              style={styles.iconSize}
            />
          </View>
          <Text style={styles.text}>To Mobile Number</Text>
        </View>
        <View>
          <View style={[styles.card, styles.flexColumn]}>
            <Image
              source={require("../assets/images/checkBalanceIcon.png")}
              style={styles.iconSize}
            />
          </View>
          <Text style={styles.text}>To Mobile Number</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "gray",
  },
  container: {
    backgroundColor: "lightblue",
    padding: 20,
  },
  wrapper: {
    flexDirection: "row", // Keep items in a row
    justifyContent: "space-between", // Distribute space between items
    flexWrap: "wrap", // Allow items to wrap to the next line
    paddingHorizontal: 20,
  },
  iconSize: {
    width: "100%",
    height: "100%",
    // backgroundColor: Colors.light.background,
  },
  card: {
    backgroundColor: "lightpink",
    borderRadius: 10,
    height: 50, // Ensure this height accommodates the content
    width: 50, // Ensure this width accommodates the content
    padding: 10,
  },
  text: {
    // flexWrap: "wrap",
    fontSize: 12,
    width: 50, // Ensure text does not exceed the width of the card
    marginTop: 5,
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
});

export default TransferMoney;
