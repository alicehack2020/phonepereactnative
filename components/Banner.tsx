import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const Banner = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        // showsButtons={true}
        autoplay={true}
        autoplayTimeout={2.5}
      >
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/banner2.png")}
            style={styles.images}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/baner1.png")}
            style={styles.images}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/banner2.png")}
            style={styles.images}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/baner1.png")}
            style={styles.images}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200, // Adjust the height as needed
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    width: "100%",
    height: "100%",
  },
});

export default Banner;
