import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Lucideshare from "../assets/lucideshare.svg";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AchievementScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.achievementScreen, styles.iconLayout]}>
      <Text style={styles.achievementLettuceBegin}>
        Achievement: Lettuce Begin!
      </Text>
      <Pressable
        style={styles.arrowDown}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.unknown2Icon}
          contentFit="cover"
          source={require("../assets/unknown-2.png")}
        />
        <Lucideshare style={styles.lucideshareIcon} width={40} height={40} />
      </View>
      <Text style={styles.commonBadge}>{`Common Badge
`}</Text>
      <Text style={[styles.firstHealthyFood, styles.funFactLettuceTypo]}>
        First healthy food scanned!
      </Text>
      <Text style={[styles.funFactLettuce, styles.funFactLettuceTypo]}>
        Fun fact: “Lettuce is 95% water, making it one of the most hydrating
        foods!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupChildLayout: {
    height: 690,
    width: 340,
    position: "absolute",
  },
  funFactLettuceTypo: {
    left: 93,
    textAlign: "left",
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 20,
    position: "absolute",
  },
  achievementLettuceBegin: {
    marginLeft: -113,
    top: 41,
    left: "50%",
    textAlign: "center",
    color: Color.grey700,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.headline5_size,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowDown: {
    left: 26,
    top: 39,
    width: 24,
    height: 24,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
  },
  unknown2Icon: {
    top: 28,
    left: 142,
    width: 53,
    height: 50,
    position: "absolute",
  },
  lucideshareIcon: {
    top: 548,
    left: 150,
    position: "absolute",
  },
  rectangleParent: {
    top: 100,
    left: 25,
  },
  commonBadge: {
    top: 192,
    left: 119,
    width: 136,
    height: 23,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.headline5_size,
    position: "absolute",
  },
  firstHealthyFood: {
    top: 239,
    fontSize: FontSize.headline6_size,
    width: 192,
    height: 20,
    color: Color.colorBlack,
    left: 93,
  },
  funFactLettuce: {
    top: 296,
    fontSize: FontSize.size_xs,
    width: 220,
    height: 69,
    color: Color.grey700,
  },
  achievementScreen: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
  },
});

export default AchievementScreen;
