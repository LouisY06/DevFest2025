import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Maskgroup1 from "../assets/mask-group1.svg";
import { useNavigation } from "@react-navigation/native";
import Iconachievement from "../assets/-icon-achievement.svg";
import Ellipse7 from "../assets/ellipse-7.svg";
import Vector1 from "../assets/vector1.svg";
import Ellipse6 from "../assets/ellipse-6.svg";
import Vector2 from "../assets/vector2.svg";
import Vector3 from "../assets/vector3.svg";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LouisProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.louisProfile, styles.iconLayout1]}>
      <View style={styles.louisProfileChild} />
      <Text style={[styles.louis, styles.youTypo]}>Louis</Text>
      <Maskgroup1
        style={[styles.maskGroupIcon, styles.iconLayout]}
        width={21}
        height={10}
      />
      <View style={[styles.omnivoreMaleParent, styles.omnivoreLayout]}>
        <Text style={[styles.omnivoreMale, styles.omnivoreMaleTypo]}>
          Omnivore, male
        </Text>
        <View style={[styles.koopaTroopaParent, styles.koopaParentPosition]}>
          <Text style={[styles.koopaTroopa, styles.koopaTroopaTypo]}>
            Koopa Troopa
          </Text>
          <Text style={[styles.nutriscanLoverSince, styles.omnivoreMaleTypo]}>
            NutriScan lover since 2025
          </Text>
        </View>
      </View>
      <Text style={[styles.dob20050202, styles.dobTypo]}>DOB: 2005/02/02</Text>
      <View style={styles.louisProfileChild} />
      <Pressable style={styles.arrowDown} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
      <Iconachievement
        style={[styles.iconAchievement, styles.iconLayout]}
        width={5}
        height={4}
      />
      <View style={[styles.omnivoreMaleGroup, styles.omnivoreLayout]}>
        <Text style={[styles.omnivoreMale, styles.omnivoreMaleTypo]}>
          Omnivore, male
        </Text>
        <View style={[styles.koopaTroopaParent, styles.koopaParentPosition]}>
          <Text style={[styles.koopaTroopa, styles.koopaTroopaTypo]}>
            Louis the 14th
          </Text>
          <Text style={[styles.nutriscanLoverSince, styles.omnivoreMaleTypo]}>
            Vegan lover since 2025
          </Text>
        </View>
      </View>
      <Text style={[styles.dob16380905, styles.dobTypo]}>DOB: 1638/09/05</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <Image
        style={[styles.unknown15Icon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/unknown-15.png")}
      />
      <Image
        style={[styles.icon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/2789129-2.png")}
      />
      <Image
        style={[styles.icon2, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/913376-2.png")}
      />
      <View style={[styles.louisProfileInner, styles.rectangleParentLayout]}>
        <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Ellipse7
            style={[styles.groupItem, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Vector1
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
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
            style={[styles.youAndLouisContainer1, styles.youContainerPosition]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>Louis</Text>
            <Text style={styles.and}>{` became friends!
January, 2024`}</Text>
          </Text>
          <Ellipse6
            style={[styles.groupInner, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Text style={[styles.jointActivities, styles.groupPosition]}>
            Joint Activities
          </Text>
          <Vector2
            style={[styles.vectorIcon1, styles.vectorIconLayout1]}
            width={11}
            height={5}
          />
          <Text
            style={[styles.youAndLouisContainer2, styles.youContainerLayout]}
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
          <Text style={[styles.jointActivities, styles.groupPosition]}>
            Joint Activities
          </Text>
          <Ellipse6
            style={[styles.groupInner, styles.groupPosition]}
            width={50}
            height={50}
          />
          <Text
            style={[styles.youAndLouisContainer2, styles.youContainerLayout]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>Louis</Text>
            <Text
              style={styles.and}
            >{` completed a week-long shared health streak together!
September 07, 2024`}</Text>
          </Text>
          <Vector3
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            width={11}
            height={5}
          />
          <Ellipse7
            style={[styles.groupItem, styles.groupPosition]}
            width={50}
            height={50}
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
          <Vector3
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            width={11}
            height={5}
          />
          <Text
            style={[styles.youAndLouisContainer5, styles.youContainerPosition]}
          >
            <Text style={styles.youTypo}>You</Text>
            <Text style={styles.and}>{` and `}</Text>
            <Text style={styles.youTypo}>Louis</Text>
            <Text style={styles.and}>{` became friends!
January, 2024`}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  youTypo: {
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  omnivoreLayout: {
    height: 53,
    width: 159,
    left: 161,
    position: "absolute",
  },
  omnivoreMaleTypo: {
    width: 136,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.inderRegular,
    fontSize: FontSize.size_3xs,
    left: 0,
    lineHeight: 20,
    position: "absolute",
  },
  koopaParentPosition: {
    top: 0,
    left: 0,
  },
  koopaTroopaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 20,
  },
  dobTypo: {
    width: 121,
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  iconGroupLayout: {
    height: 50,
    width: 50,
  },
  rectangleParentLayout: {
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
    position: "absolute",
  },
  vectorIconLayout1: {
    left: "8.2%",
    right: "80.67%",
    width: "11.13%",
    height: "5.02%",
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
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  youContainerPosition: {
    top: 223,
    height: 30,
    width: 207,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "7.65%",
    right: "81.22%",
    width: "11.13%",
    height: "5.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  louisProfileChild: {
    top: 82,
    left: 34,
    height: 224,
    width: 324,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  louis: {
    marginLeft: -21,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    color: Color.grey700,
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "700",
    position: "absolute",
  },
  maskGroupIcon: {
    top: "12.64%",
    right: "64.92%",
    bottom: "77.5%",
    left: "13.74%",
  },
  omnivoreMale: {
    top: 33,
    height: 20,
  },
  koopaTroopa: {
    top: 0,
    left: 0,
    width: 159,
    position: "absolute",
  },
  nutriscanLoverSince: {
    top: 23,
  },
  koopaTroopaParent: {
    height: 43,
    width: 159,
    top: 0,
    position: "absolute",
  },
  omnivoreMaleParent: {
    top: 110,
  },
  dob20050202: {
    top: 163,
    left: 161,
    width: 121,
    fontSize: FontSize.size_5xs,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowDown: {
    left: 26,
    top: 39,
    width: 24,
    height: 24,
    position: "absolute",
  },
  iconAchievement: {
    top: "27.05%",
    right: "71.05%",
    bottom: "69.25%",
    left: "23.62%",
  },
  omnivoreMaleGroup: {
    top: 120,
  },
  dob16380905: {
    top: 170,
    left: 160,
  },
  frameIcon: {
    top: 109,
    left: 52,
    width: 80,
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  unknown15Icon: {
    left: 272,
    top: 225,
    width: 50,
    position: "absolute",
  },
  icon1: {
    left: 77,
    top: 225,
    width: 50,
    position: "absolute",
  },
  icon2: {
    left: 174,
    top: 225,
    width: 50,
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
    top: "43.14%",
    bottom: "51.84%",
  },
  and: {
    fontFamily: FontFamily.interRegular,
  },
  youAndLouisContainer: {
    top: 149,
  },
  youAndLouisContainer1: {
    left: 100,
  },
  groupInner: {
    top: 64,
  },
  jointActivities: {
    top: 19,
    width: 194,
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    lineHeight: 20,
  },
  vectorIcon1: {
    top: "23.07%",
    bottom: "71.91%",
  },
  youAndLouisContainer2: {
    top: 69,
  },
  rectangleView: {
    top: 10,
    left: 3,
  },
  vectorIcon2: {
    top: "18.84%",
    bottom: "76.14%",
  },
  vectorIcon3: {
    top: "38.16%",
    bottom: "56.81%",
  },
  youAndLouisContainer5: {
    left: 96,
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  louisProfileInner: {
    top: 348,
    left: 31,
  },
  louisProfile: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default LouisProfile;
