import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Maskgroup3 from "../assets/mask-group3.svg";
import Ellipse7 from "../assets/ellipse-7.svg";
import Vector6 from "../assets/vector6.svg";
import Ellipse6 from "../assets/ellipse-6.svg";
import Ellipse10 from "../assets/ellipse-10.svg";
import Ellipse9 from "../assets/ellipse-9.svg";
import Gameiconsachievement from "../assets/gameiconsachievement.svg";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Personal1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.personal, styles.iconLayout1]}>
      <View style={styles.personalChild} />
      <Text style={[styles.myStats, styles.myStatsTypo]}>My Stats</Text>
      <Pressable
        style={styles.arrowDown}
        onPress={() => navigation.navigate("MyStreaks")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
      <Maskgroup3 style={styles.maskGroupIcon} width={21} height={10} />
      <View style={[styles.omnivoreMaleParent, styles.koopaParentLayout]}>
        <Text style={[styles.omnivoreMale, styles.omnivoreMaleTypo]}>
          Omnivore, male
        </Text>
        <View style={[styles.koopaTroopaParent, styles.koopaParentPosition]}>
          <Text style={[styles.koopaTroopa, styles.koopaParentPosition]}>
            Koopa Troopa
          </Text>
          <Text style={[styles.nutriscanLoverSince, styles.omnivoreMaleTypo]}>
            NutriScan lover since 2025
          </Text>
        </View>
      </View>
      <Text style={[styles.dob20050202, styles.myStatsTypo]}>
        DOB: 2005/02/02
      </Text>
      <Text style={styles.edit}>edit</Text>
      <View style={styles.personalChild} />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/2447774-1.png")}
      />
      <Image
        style={[styles.unknown3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/unknown-3.png")}
      />
      <Image
        style={[styles.unknown11Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/unknown-15.png")}
      />
      <Text style={[styles.personal1, styles.youTypo]}>Personal</Text>
      <Text style={[styles.myStats, styles.myStatsTypo]}>My Stats</Text>
      <Maskgroup3 style={styles.maskGroupIcon} width={21} height={10} />
      <View style={[styles.omnivoreMaleParent, styles.koopaParentLayout]}>
        <Text style={[styles.omnivoreMale, styles.omnivoreMaleTypo]}>
          Omnivore, male
        </Text>
        <View style={[styles.koopaTroopaParent, styles.koopaParentPosition]}>
          <Text style={[styles.koopaTroopa, styles.koopaParentPosition]}>
            Koopa Troopa
          </Text>
          <Text style={[styles.nutriscanLoverSince, styles.omnivoreMaleTypo]}>
            NutriScan lover since 2025
          </Text>
        </View>
      </View>
      <Text style={[styles.dob20050202, styles.myStatsTypo]}>
        DOB: 2005/02/02
      </Text>
      <Text style={styles.edit}>edit</Text>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Ellipse7
            style={[styles.groupItem, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Vector6
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            width={11}
            height={5}
          />
          <Text
            style={[styles.youAndLouisContainer, styles.youContainerLayout]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>Louis</Text>
            <Text
              style={styles.and}
            >{` completed a month long shared health streak together!
April, 2024`}</Text>
          </Text>
          <Text
            style={[styles.youAndLoyouContainer, styles.youContainerPosition]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>LoYou</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>{`David `}</Text>
            <Text
              style={styles.and}
            >{` completed a year long shared health streak together!
August, 2024`}</Text>
            <Text style={styles.youTypo}>uis</Text>
            <Text style={styles.and}>{` became friends!
January, 2024`}</Text>
          </Text>
          <Ellipse6
            style={[styles.groupInner, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Text style={[styles.jointActivities, styles.jointActivitiesTypo]}>
            Joint Activities
          </Text>
          <Vector6
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            width={11}
            height={5}
          />
          <Text
            style={[styles.youAndLouisContainer1, styles.youContainerLayout]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>Louis</Text>
            <Text
              style={styles.and}
            >{` completed a week-long shared health streak together!
September 07, 2024`}</Text>
          </Text>
          <View style={[styles.rectangleView, styles.groupChildLayout]} />
          <Text
            style={[
              styles.youCompletedYourContainer,
              styles.youContainerPosition,
            ]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` completed your 10th badge!
August, 2024`}</Text>
          </Text>
          <Ellipse10
            style={[styles.ellipseIcon, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Text style={[styles.newAchievements, styles.jointActivitiesTypo]}>
            New Achievements
          </Text>
          <Ellipse6
            style={[styles.groupInner, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Text
            style={[styles.youAndLouisContainer1, styles.youContainerLayout]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>Louis</Text>
            <Text
              style={styles.and}
            >{` completed a week-long shared health streak together!
September 07, 2024`}</Text>
          </Text>
          <Vector6
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            width={11}
            height={5}
          />
          <Ellipse9
            style={[styles.groupItem, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Text
            style={[styles.youAndLouisContainer, styles.youContainerLayout]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>{`David `}</Text>
            <Text
              style={styles.and}
            >{` completed a year long shared health streak together!
August, 2024`}</Text>
          </Text>
          <Vector6
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            width={11}
            height={5}
          />
          <Gameiconsachievement
            style={styles.gameIconsachievement}
            width={40}
            height={40}
          />
        </View>
        <Gameiconsachievement
          style={styles.gameIconsachievement}
          width={40}
          height={40}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  myStatsTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 20,
  },
  koopaParentLayout: {
    width: 159,
    position: "absolute",
  },
  omnivoreMaleTypo: {
    width: 136,
    color: Color.colorGray_200,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_3xs,
    left: 0,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  koopaParentPosition: {
    top: 0,
    left: 0,
  },
  iconLayout: {
    height: 50,
    width: 50,
    top: 270,
    position: "absolute",
  },
  youTypo: {
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
  },
  parentLayout: {
    height: 414,
    width: 327,
    position: "absolute",
  },
  groupChildLayout: {
    height: 404,
    width: 324,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  groupPosition: {
    left: 18,
    height: 50,
    width: 50,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "7.65%",
    right: "81.65%",
    width: "10.7%",
    height: "4.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  youContainerLayout: {
    height: 30,
    width: 207,
    fontSize: FontSize.size_xs,
    left: 97,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  youContainerPosition: {
    left: 100,
    height: 30,
    width: 207,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  jointActivitiesTypo: {
    top: 19,
    left: 18,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  personalChild: {
    top: 132,
    left: 33,
    height: 224,
    width: 324,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  myStats: {
    top: 91,
    left: 136,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
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
  maskGroupIcon: {
    top: "18.9%",
    right: "65.13%",
    bottom: "71.24%",
    left: "13.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  omnivoreMale: {
    top: 33,
    height: 20,
  },
  koopaTroopa: {
    width: 159,
    position: "absolute",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  nutriscanLoverSince: {
    top: 23,
  },
  koopaTroopaParent: {
    height: 43,
    width: 159,
    position: "absolute",
  },
  omnivoreMaleParent: {
    top: 160,
    height: 53,
    left: 160,
  },
  dob20050202: {
    top: 213,
    fontSize: FontSize.size_5xs,
    width: 121,
    left: 160,
    textAlign: "left",
    position: "absolute",
  },
  edit: {
    top: 96,
    left: 234,
    fontSize: FontSize.size_7xs,
    lineHeight: 26,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    left: 78,
  },
  unknown3Icon: {
    left: 262,
  },
  unknown11Icon: {
    left: 170,
  },
  personal1: {
    top: 41,
    left: 159,
    fontSize: FontSize.headline5_size,
    color: Color.grey700,
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  groupItem: {
    top: 144,
  },
  vectorIcon: {
    top: "38.41%",
    bottom: "56.76%",
  },
  and: {
    fontFamily: FontFamily.interRegular,
  },
  youAndLouisContainer: {
    top: 149,
  },
  youAndLoyouContainer: {
    top: 223,
  },
  groupInner: {
    top: 64,
  },
  jointActivities: {
    width: 194,
  },
  vectorIcon1: {
    top: "19.08%",
    bottom: "76.09%",
  },
  youAndLouisContainer1: {
    top: 69,
  },
  rectangleView: {
    top: 10,
    left: 3,
  },
  youCompletedYourContainer: {
    top: 231,
  },
  ellipseIcon: {
    top: 218,
  },
  newAchievements: {
    width: 223,
    height: 29,
  },
  gameIconsachievement: {
    left: 23,
    top: 223,
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  groupParent: {
    top: 372,
    left: 31,
  },
  personal: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
  },
});

export default Personal1;
