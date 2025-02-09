import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Ellipse5 from "../assets/ellipse-5.svg";
import Mdifoodcroissant from "../assets/mdifoodcroissant.svg";
import Vector4 from "../assets/vector4.svg";
import Phbowlfoodfill from "../assets/phbowlfoodfill.svg";
import Vector5 from "../assets/vector5.svg";
import Rectangle2 from "../assets/rectangle-2.svg";
import { useNavigation } from "@react-navigation/native";
import Morehorizontal from "../assets/morehorizontal.svg";
import Maskgroup2 from "../assets/mask-group2.svg";
import Mdirice from "../assets/mdirice.svg";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Personal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personal}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Ellipse5
          style={[styles.groupItem, styles.groupItemLayout]}
          width={45}
          height={45}
        />
        <View style={styles.groupInner} />
      </View>
      <View style={[styles.personalChild, styles.childLayout]} />
      <View style={[styles.personalItem, styles.childLayout]} />
      <Text style={[styles.apple, styles.appleFlexBox]}>Apple</Text>
      <Ellipse5
        style={[styles.personalInner, styles.groupItemLayout]}
        width={45}
        height={45}
      />
      <Text style={styles.kcal}>100 kcal</Text>
      <Ellipse5
        style={[styles.ellipseIcon, styles.personalChildPosition]}
        width={45}
        height={45}
      />
      <Mdifoodcroissant
        style={[styles.mdifoodCroissantIcon, styles.mdifoodIconLayout]}
        width={32}
        height={32}
      />
      <Vector4
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        width={7}
        height={3}
      />
      <Text style={[styles.chickenOverRice, styles.appleFlexBox]}>
        Chicken Over Rice
      </Text>
      <Text
        style={[styles.croissant, styles.appleFlexBox]}
      >{`Croissant `}</Text>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Ellipse5
          style={[styles.groupItem, styles.groupItemLayout]}
          width={45}
          height={45}
        />
        <View style={styles.groupInner} />
        <Phbowlfoodfill
          style={[styles.phbowlFoodFillIcon, styles.frameWrapperPosition]}
          width={31}
          height={31}
        />
      </View>
      <Text style={[styles.kcal1, styles.kcalTypo1]}>700 kcal</Text>
      <View style={[styles.personalChild1, styles.childLayout]} />
      <View style={[styles.personalChild2, styles.childLayout]} />
      <Text style={[styles.apple1, styles.appleFlexBox]}>Apple</Text>
      <Ellipse5
        style={[styles.personalChild3, styles.personalChildPosition]}
        width={45}
        height={45}
      />
      <Text style={[styles.kcal2, styles.kcalTypo]}>100 kcal</Text>
      <Ellipse5
        style={[styles.personalChild4, styles.personalChildPosition]}
        width={45}
        height={45}
      />
      <Text style={[styles.kcal3, styles.kcal3Position]}>120 kcal</Text>
      <Mdifoodcroissant
        style={[styles.mdifoodCroissantIcon1, styles.mdifoodIconLayout]}
        width={32}
        height={32}
      />
      <Vector5
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        width={7}
        height={3}
      />
      <Text style={[styles.chickenOverRice1, styles.appleFlexBox]}>
        Chicken Over Rice
      </Text>
      <Text
        style={[styles.croissant1, styles.kcal3Position]}
      >{`Croissant `}</Text>
      <Text style={[styles.food, styles.foodTypo]}>Food</Text>
      <Rectangle2
        style={[styles.rectangleIcon, styles.childLayout]}
        width={322}
        height={60}
      />
      <Text style={[styles.kcal4, styles.kcalTypo1]}>700 kcal</Text>
      <Text style={[styles.kcal5, styles.kcalTypo]}>120 kcal</Text>
      <Text style={[styles.homepage, styles.textTypo]}>Homepage</Text>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("MyAchievements")}
      >
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupLayout]} />
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <View
              style={[
                styles.youHaveEarnedTheTrophyBadParent,
                styles.groupChildPosition1,
              ]}
            >
              <Text style={[styles.youHaveEarned, styles.foodTypo]}>
                You have earned the Trophy badge
              </Text>
              <Text
                style={styles.forBeingOn}
              >{`For being on your set eating habit goals in the past month!
`}</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent1, styles.groupChild3Layout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={[styles.groupChild3, styles.groupChild3Layout]} />
        <Text style={[styles.similarProfiles, styles.omnivoreLayout]}>
          similar profiles
        </Text>
        <View style={[styles.omnivoreParent, styles.frameWrapperPosition]}>
          <Text style={[styles.omnivore, styles.omnivoreLayout]}>Omnivore</Text>
          <Text style={[styles.myEatingHabits, styles.textFlexBox]}>
            My Eating Habits
          </Text>
        </View>
        <Text style={[styles.text, styles.textFlexBox]}>86%</Text>
      </Pressable>
      <Text style={[styles.koopaTroopa, styles.appleFlexBox]}>
        Koopa Troopa
      </Text>
      <Morehorizontal
        style={[styles.moreHorizontalIcon, styles.arrowDownLayout]}
        width={24}
        height={24}
      />
      <Maskgroup2
        style={[styles.maskGroupIcon, styles.vectorIconLayout]}
        width={21}
        height={10}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("MyAchievements")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/419952-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.arrowDown, styles.arrowDownLayout]}
        onPress={() => navigation.navigate("Landing")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
      <Mdirice style={styles.mdiriceIcon} width={30} height={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 60,
    width: 419,
    left: 30,
    position: "absolute",
  },
  childLayout: {
    width: 322,
    borderRadius: Border.br_5xl,
    height: 60,
    position: "absolute",
  },
  groupItemLayout: {
    height: 45,
    width: 45,
    position: "absolute",
  },
  appleFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  personalChildPosition: {
    left: 46,
    height: 45,
    width: 45,
    position: "absolute",
  },
  mdifoodIconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameWrapperPosition: {
    left: 20,
    position: "absolute",
  },
  kcalTypo1: {
    left: 259,
    opacity: 0.3,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.headline4_size,
    textAlign: "left",
    position: "absolute",
  },
  kcalTypo: {
    left: 262,
    opacity: 0.3,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.headline4_size,
  },
  kcal3Position: {
    top: 870,
    textAlign: "left",
    position: "absolute",
  },
  foodTypo: {
    lineHeight: 24,
    color: Color.grey700,
    textAlign: "left",
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
  },
  textTypo: {
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
  },
  groupLayout: {
    height: 110,
    width: 327,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 0,
    left: 0,
  },
  groupChild3Layout: {
    height: 109,
    width: 326,
    position: "absolute",
  },
  omnivoreLayout: {
    height: 27,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    lineHeight: 20,
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.grey700,
    position: "absolute",
  },
  arrowDownLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChild: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 7,
    left: 13,
  },
  groupInner: {
    left: 240,
    width: 179,
    height: 24,
    top: 22,
    position: "absolute",
  },
  rectangleParent: {
    top: 528,
  },
  personalChild: {
    top: 610,
    backgroundColor: Color.white,
    left: 30,
    width: 322,
  },
  personalItem: {
    top: 690,
    backgroundColor: Color.white,
    left: 30,
    width: 322,
  },
  apple: {
    top: 716,
    left: 104,
    color: Color.colorKhaki,
    fontFamily: FontFamily.headline6,
    fontSize: FontSize.headline6_size,
    fontWeight: "600",
    lineHeight: 20,
  },
  personalInner: {
    top: 705,
    left: 43,
  },
  kcal: {
    top: 715,
    left: 264,
    opacity: 0.3,
    color: Color.colorDarkcyan,
    fontSize: FontSize.headline4_size,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    top: 617,
  },
  mdifoodCroissantIcon: {
    top: 621,
    left: 53,
  },
  vectorIcon: {
    top: "84.6%",
    right: "79.74%",
    bottom: "12.2%",
    left: "13.59%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  chickenOverRice: {
    top: 549,
    left: 101,
    color: Color.colorKhaki,
    fontFamily: FontFamily.headline6,
    fontSize: FontSize.headline6_size,
    fontWeight: "600",
    lineHeight: 20,
  },
  croissant: {
    top: 627,
    left: 101,
    color: Color.colorKhaki,
    fontFamily: FontFamily.headline6,
    fontSize: FontSize.headline6_size,
    fontWeight: "600",
    lineHeight: 20,
  },
  phbowlFoodFillIcon: {
    top: 15,
  },
  rectangleGroup: {
    top: 771,
  },
  kcal1: {
    top: 793,
  },
  personalChild1: {
    top: 853,
    backgroundColor: Color.white,
    left: 30,
    width: 322,
  },
  personalChild2: {
    top: 933,
    backgroundColor: Color.white,
    left: 30,
    width: 322,
  },
  apple1: {
    top: 951,
    left: 107,
    color: Color.colorKhaki,
    fontFamily: FontFamily.headline6,
    fontSize: FontSize.headline6_size,
    fontWeight: "600",
    lineHeight: 20,
  },
  personalChild3: {
    top: 940,
  },
  kcal2: {
    top: 949,
    textAlign: "left",
    position: "absolute",
  },
  personalChild4: {
    top: 860,
  },
  kcal3: {
    left: 262,
    opacity: 0.3,
    color: Color.colorDarkcyan,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.headline4_size,
  },
  mdifoodCroissantIcon1: {
    top: 867,
    left: 52,
  },
  vectorIcon1: {
    top: "116.99%",
    right: "78.13%",
    bottom: "-20.19%",
    left: "15.21%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  chickenOverRice1: {
    top: 792,
    left: 101,
    color: Color.colorKhaki,
    fontFamily: FontFamily.headline6,
    fontSize: FontSize.headline6_size,
    fontWeight: "600",
    lineHeight: 20,
  },
  croissant1: {
    left: 101,
    color: Color.colorKhaki,
    fontFamily: FontFamily.headline6,
    fontSize: FontSize.headline6_size,
    fontWeight: "600",
    lineHeight: 20,
  },
  food: {
    left: 24,
    fontSize: FontSize.size_mini,
    color: Color.grey700,
    top: 488,
    position: "absolute",
  },
  rectangleIcon: {
    top: 1001,
    left: 101,
  },
  kcal4: {
    top: 550,
  },
  kcal5: {
    top: 632,
    textAlign: "left",
    position: "absolute",
  },
  homepage: {
    marginLeft: -43,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    textAlign: "center",
    color: Color.grey700,
    lineHeight: 20,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  youHaveEarned: {
    fontSize: FontSize.size_xs,
    color: Color.grey700,
  },
  forBeingOn: {
    fontSize: FontSize.size_3xs,
    lineHeight: 15,
    width: 188,
    height: 40,
    color: Color.grey500,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  youHaveEarnedTheTrophyBadParent: {
    gap: 7,
    left: 0,
    position: "absolute",
  },
  frameWrapper: {
    top: 20,
    width: 202,
    height: 71,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  groupPressable: {
    top: 232,
    left: 28,
  },
  groupChild3: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  similarProfiles: {
    top: 57,
    left: 220,
    width: 90,
    height: 27,
    fontSize: FontSize.size_smi,
    color: Color.grey500,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  omnivore: {
    top: 29,
    width: 90,
    height: 27,
    fontSize: FontSize.size_smi,
    color: Color.grey500,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: 0,
  },
  myEatingHabits: {
    width: 127,
    height: 27,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    lineHeight: 20,
    display: "flex",
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  omnivoreParent: {
    top: 27,
    height: 56,
    width: 127,
  },
  text: {
    left: 236,
    fontSize: FontSize.headline3_size,
    lineHeight: 26,
    textAlign: "right",
    width: 74,
    height: 35,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    display: "flex",
    top: 22,
  },
  rectangleParent1: {
    top: 355,
    left: 32,
  },
  koopaTroopa: {
    top: 187,
    left: 106,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    color: Color.colorBlack,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 20,
  },
  moreHorizontalIcon: {
    left: 311,
    top: 488,
    overflow: "hidden",
  },
  maskGroupIcon: {
    top: "9.73%",
    right: "39.74%",
    bottom: "80.41%",
    left: "38.92%",
  },
  pressable: {
    left: 270,
    top: 264,
    width: 50,
    height: 50,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  arrowDown: {
    left: 26,
    top: 39,
  },
  mdiriceIcon: {
    top: 543,
    left: 50,
    position: "absolute",
  },
  personal: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Personal;
