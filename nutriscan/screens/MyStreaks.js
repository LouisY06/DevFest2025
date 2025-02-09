import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Vector2 from "../assets/vector-2.svg";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent from "../components/FrameComponent";
import Morehorizontal from "../assets/morehorizontal.svg";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const MyStreaks = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myStreaks, styles.iconLayout]}>
      <Pressable
        style={styles.myStreaksChild}
        onPress={() => navigation.navigate("Settings")}
      />
      <Pressable
        style={styles.arrowDown}
        onPress={() => navigation.navigate("Personal")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
      <Text style={styles.myStreaks1}>My Streaks</Text>
      <View style={[styles.parent, styles.groupLayout1]}>
        <Text style={[styles.text, styles.textFlexBox]}>0</Text>
        <View style={styles.groupChild} />
      </View>
      <Text style={[styles.jan, styles.janTypo]}>Jan</Text>
      <Text style={[styles.feb, styles.janTypo]}>Feb</Text>
      <Text style={[styles.mar, styles.janTypo]}>Mar</Text>
      <Text style={[styles.apr, styles.janTypo]}>Apr</Text>
      <View style={[styles.group, styles.groupLayout1]}>
        <Text style={[styles.text, styles.textFlexBox]}>33</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={[styles.container, styles.groupLayout1]}>
        <Text style={[styles.text, styles.textFlexBox]}>66</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <Text style={[styles.text, styles.textFlexBox]}>100</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <Vector2 style={styles.myStreaksItem} width={303} height={120} />
      <View style={styles.parent1}>
        <Text style={[styles.text4, styles.text4Typo]}>56%</Text>
        <Text style={[styles.goalsCompleted, styles.text5FlexBox]}>
          goals completed
        </Text>
      </View>
      <FrameComponent3 />
      <FrameComponent
        frameViewTop={603}
        frameViewLeft={34}
        frameViewLeft1={277}
        prop="57"
        halal="Halal"
        leo="Leo"
        leoFontFamily="Inter-SemiBold"
        frame={
          <Image
            style={styles.frameIcon1}
            source={require("../assets/frame12.png")}
          />
        }
      />
      <FrameComponent
        frameViewTop={696}
        frameViewLeft={34}
        frameViewLeft1={276}
        prop="91"
        halal="Omni"
        leo="David"
        leoFontFamily="Inter-SemiBold"
        frame={
          <Image
            style={styles.frameIcon2}
            source={require("../assets/frame7.png")}
          />
        }
      />
      <Text style={styles.yourFriends}>Your Friends</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.text5, styles.text5Typo]}>20</Text>
      </View>
      <Text style={[styles.currentBmi, styles.text5Typo]}>Current BMI</Text>
      <Morehorizontal
        style={styles.moreHorizontalIcon}
        width={24}
        height={24}
      />
      <Text style={[styles.edit, styles.editLayout]}>edit</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  groupLayout1: {
    height: 20,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    lineHeight: 20,
  },
  janTypo: {
    top: 297,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.headline6_size,
    lineHeight: 20,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: 0.001,
    borderStyle: "dashed",
    height: 1,
    width: 327,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray,
    top: 10,
    position: "absolute",
  },
  text4Typo: {
    height: 37,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    position: "absolute",
  },
  text5FlexBox: {
    textAlign: "right",
    lineHeight: 26,
  },
  rectangleLayout: {
    height: 74,
    width: 186,
    position: "absolute",
  },
  text5Typo: {
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  editLayout: {
    lineHeight: 26,
    textAlign: "left",
  },
  myStreaksChild: {
    top: 356,
    width: 109,
    height: 109,
    borderRadius: Border.br_5xl,
    left: 35,
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowDown: {
    top: 39,
    height: 24,
    width: 24,
    left: 26,
    position: "absolute",
  },
  myStreaks1: {
    marginLeft: -44,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    textAlign: "center",
    color: Color.grey700,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 20,
    position: "absolute",
  },
  text: {
    color: Color.grey500,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.headline6_size,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: 1,
    width: 327,
    borderTopWidth: 1,
    borderColor: Color.colorLightgray,
    top: 10,
    borderStyle: "solid",
    left: 47,
    position: "absolute",
  },
  parent: {
    top: 265,
    width: 373,
    left: 25,
    height: 20,
  },
  jan: {
    left: 72,
    color: Color.colorDarkcyan,
  },
  feb: {
    left: 157,
    color: Color.grey500,
  },
  mar: {
    left: 242,
    color: Color.grey500,
  },
  apr: {
    left: 328,
    color: Color.grey500,
  },
  groupItem: {
    left: 46,
  },
  group: {
    top: 207,
    width: 372,
    height: 20,
    left: 26,
  },
  groupInner: {
    left: 47,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  container: {
    top: 149,
    width: 373,
    left: 25,
    height: 20,
  },
  groupView: {
    top: 91,
    width: 373,
    left: 25,
    height: 20,
  },
  myStreaksItem: {
    top: 109,
    left: 64,
    position: "absolute",
  },
  text4: {
    fontSize: 25,
    color: "rgba(156, 104, 0, 0.87)",
    width: 56,
    lineHeight: 26,
    textAlign: "left",
    left: 0,
    top: 0,
    height: 37,
    alignItems: "center",
    display: "flex",
  },
  goalsCompleted: {
    top: 19,
    left: 2,
    fontSize: FontSize.size_3xs,
    color: "rgba(169, 124, 34, 0.48)",
    width: 84,
    height: 37,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    position: "absolute",
  },
  parent1: {
    top: 392,
    left: 62,
    width: 86,
    height: 56,
    position: "absolute",
  },
  frameIcon1: {
    position: "absolute",
    top: 7,
    left: 7,
    width: 65,
    height: 65,
    overflow: "hidden",
  },
  frameIcon2: {
    position: "absolute",
    top: 7,
    left: 7,
    width: 65,
    height: 65,
    overflow: "hidden",
  },
  yourFriends: {
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    top: 470,
    textAlign: "left",
    color: Color.grey700,
    left: 35,
    position: "absolute",
  },
  rectangleView: {
    borderColor: Color.colorDarkcyan,
    borderWidth: 2,
    borderStyle: "solid",
    width: 186,
    left: 0,
    top: 0,
    borderRadius: Border.br_5xl,
  },
  text5: {
    top: 31,
    left: 128,
    width: 42,
    height: 11,
    textAlign: "right",
    lineHeight: 26,
    color: Color.grey700,
  },
  rectangleParent: {
    top: 374,
    left: 170,
  },
  currentBmi: {
    top: 405,
    left: 186,
    color: Color.colorBlack,
    width: 97,
    height: 14,
    textAlign: "left",
    lineHeight: 20,
  },
  moreHorizontalIcon: {
    left: 321,
    top: 470,
    position: "absolute",
    overflow: "hidden",
  },
  edit: {
    top: 408,
    left: 326,
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorGray_100,
    position: "absolute",
  },
  frameIcon: {
    top: 225,
    left: 77,
    width: 8,
    height: 8,
    position: "absolute",
    overflow: "hidden",
  },
  myStreaks: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default MyStreaks;
