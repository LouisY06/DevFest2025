import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Rectangle2 from "../assets/rectangle-2.svg";
import Group35 from "../assets/group-35.svg";
import { useNavigation } from "@react-navigation/native";
import Group36 from "../assets/group-36.svg";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Landing = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.landing}>
      <Rectangle2
        style={[styles.landingChild, styles.landingChildLayout]}
        width={322}
        height={60}
      />
      <Group35
        style={[styles.landingItem, styles.groupIconPosition]}
        width={375}
        height={107}
      />
      <View style={[styles.landingInner, styles.landingLayout]} />
      <View style={[styles.rectangleView, styles.landingLayout]} />
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame14.png")}
      />
      <Text style={[styles.hAgo, styles.agoTypo]}>1h ago</Text>
      <Text style={[styles.leo, styles.leoTypo]}>Leo</Text>
      <Text style={[styles.delicious, styles.yummyLayout]}>Delicious!</Text>
      <Text style={[styles.hAgo1, styles.agoTypo]}>1h ago</Text>
      <Text style={[styles.louis, styles.leoTypo]}>Louis</Text>
      <Image
        style={[styles.d3f9ae72e47fb08bad7968dc206bdbIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/1d3f9ae72e47fb08bad7968dc206bdb8-1.png")}
      />
      <Pressable
        style={[styles.frame, styles.frameIconLayout]}
        onPress={() => navigation.navigate("LouisProfile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/frame15.png")}
        />
      </Pressable>
      <Text style={[styles.yummy, styles.yummyLayout]}>Yummy!</Text>
      <View style={[styles.landingChild1, styles.landingLayout]} />
      <Image
        style={[styles.img22271Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/img-2227-1.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame16.png")}
      />
      <Text style={[styles.hAgo2, styles.hAgo2Position]}>1h ago</Text>
      <Text style={[styles.david, styles.hAgo2Position]}>David</Text>
      <Text style={[styles.lookAtMy, styles.hAgo2Position]}>
        Look at my food!
      </Text>
      <Image
        style={[styles.img22302Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/img-2230-2.png")}
      />
      <View style={[styles.landingChild2, styles.landingChildLayout]} />
      <Pressable
        style={styles.theChallengeOfContainer}
        onPress={() => navigation.navigate("Challenges")}
      >
        <Text
          style={styles.theChallengeOfTheWeekIsH}
        >{`The Challenge of the week is here      >`}</Text>
      </Pressable>
      <Group36
        style={[styles.groupIcon, styles.groupIconPosition]}
        width={391}
        height={103}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  landingChildLayout: {
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  groupIconPosition: {
    left: 0,
    position: "absolute",
  },
  landingLayout: {
    height: 224,
    width: 324,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  frameIconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  agoTypo: {
    color: Color.grey700,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  leoTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  yummyLayout: {
    height: 11,
    width: 131,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  iconLayout: {
    height: 125,
    width: 167,
    left: 104,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  hAgo2Position: {
    left: 74,
    textAlign: "left",
    position: "absolute",
  },
  landingChild: {
    top: 1001,
    left: 101,
  },
  landingItem: {
    top: 682,
  },
  landingInner: {
    top: 93,
    left: 26,
    height: 224,
    width: 324,
    backgroundColor: Color.white,
  },
  rectangleView: {
    top: 365,
    left: 26,
    height: 224,
    width: 324,
    backgroundColor: Color.white,
  },
  frameIcon: {
    top: 383,
    overflow: "hidden",
    left: 43,
    width: 25,
  },
  hAgo: {
    top: 396,
    textAlign: "left",
    left: 75,
    position: "absolute",
  },
  leo: {
    top: 381,
    textAlign: "left",
    left: 75,
    position: "absolute",
  },
  delicious: {
    top: 417,
    textAlign: "left",
    left: 75,
    position: "absolute",
  },
  hAgo1: {
    top: 124,
    textAlign: "left",
    left: 75,
    position: "absolute",
  },
  louis: {
    top: 109,
    textAlign: "left",
    left: 75,
    position: "absolute",
  },
  d3f9ae72e47fb08bad7968dc206bdbIcon: {
    top: 179,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    top: 110,
    left: 43,
    width: 25,
  },
  yummy: {
    top: 149,
    textAlign: "left",
    left: 75,
    position: "absolute",
  },
  landingChild1: {
    top: 637,
    left: 25,
  },
  img22271Icon: {
    top: 717,
  },
  frameIcon1: {
    left: 36,
    top: 653,
    overflow: "hidden",
  },
  hAgo2: {
    top: 668,
    color: Color.grey700,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
  },
  david: {
    top: 653,
    color: Color.colorBlack,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  lookAtMy: {
    top: 693,
    height: 11,
    width: 131,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
  },
  img22302Icon: {
    top: 450,
  },
  landingChild2: {
    top: 33,
    left: 44,
    backgroundColor: Color.colorDarkcyan,
    width: 306,
    height: 46,
  },
  theChallengeOfTheWeekIsH: {
    marginLeft: -138,
    fontSize: FontSize.size_mini,
    lineHeight: 22,
    fontFamily: FontFamily.inderRegular,
    color: Color.white,
    textAlign: "left",
  },
  theChallengeOfContainer: {
    left: "50%",
    top: 45,
    position: "absolute",
  },
  groupIcon: {
    top: 743,
  },
  landing: {
    backgroundColor: Color.grey100,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Landing;
