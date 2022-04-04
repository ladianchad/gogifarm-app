import React from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-web-swiper";
import { View, Text } from "../Themed";

export function HomeBanner() {

  return(
    <View style={styles.bannerContainer}>
      <Swiper
        from={0}
        loop={true}
        timeout={3}
        springConfig={{
          tension: 1
        }}
        controlsProps={{
          dotsTouchable: true,
          prevPos: 'left',
          nextPos: 'right',
          dotsPos: 'bottom-right',
          PrevComponent: BannerButton,
          NextComponent: BannerButton,
          DotComponent: DotButton
        }}
      >
        <Pressable style={styles.banner}>
          <Text>안녕</Text>
        </Pressable>
        <Pressable style={styles.banner}>
          <Text>이건</Text>
        </Pressable>
        <Pressable style={styles.banner}>
          <Text>배너야</Text>
        </Pressable>
      </Swiper>
    </View>
  )
}

type  BannerButtonProps = {
  onPress: any
}

class BannerButton extends React.Component<BannerButtonProps> {

  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity 
        onPress={onPress}
        style={styles.bannerbutton}
      ></TouchableOpacity>
    )
  }
}

class DotButton extends React.Component<{ index: number, isActive: boolean, onPress: any }> {
  render() {
    const {index, isActive} = this.props;
    return(
      isActive ? 
      <View style={styles.bannerDot}>
        <Text style={styles.bannderDotText}>{index+1} / 3</Text>
      </View> : null
    )
  }
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
  },

  banner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#efefef',
  },

  bannerbutton: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    borderRadius: 30
  },

  bannerDot: {
    width: 50,
    height: 20,
    backgroundColor: "#0b0b0b",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20
  },

  bannderDotText: {
    color: "#fff"
  },
});
