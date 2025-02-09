import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import GroupComponent2 from "../components/GroupComponent2";
import Ellipse51 from "../assets/ellipse-51.svg";
import { useNavigation } from "@react-navigation/native";
import Blog1 from "../assets/blog1.svg";
import Group211 from "../assets/group-211.svg";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Text style={styles.goals}>Goals</Text>
      <GroupComponent2
        ellipse5={<Ellipse51 width={40} height={40} />}
        moreBuff="More Buff"
        proteinEater="Protein Eater"
      />
      <GroupComponent2
        groupViewLeft={204}
        groupViewTop={397}
        ellipse5={<Ellipse51 width={40} height={40} />}
        moreBuff="Vitamin A"
        proteinEater="Dairy, eggs"
      />
      <GroupComponent2
        groupViewLeft={31}
        groupViewTop={583}
        ellipse5={<Ellipse51 width={40} height={40} />}
        moreBuff="Gain Energy"
        proteinEater="Carbohydrates"
      />
      <Blog1 style={styles.blog} width={24} height={24}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/blog1.svg")}
        />
      </Blog1>
      <Text style={styles.settings1}>Settings</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Allergies")}
      >
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.editAllergiesWrapper}>
          <Text style={[styles.editAllergies, styles.editAllergiesPosition]}>
            Edit Allergies
          </Text>
        </View>
        <Text style={[styles.text, styles.textTypo]}>7</Text>
        <Text style={styles.lactoseIntolerant}>Lactose Intolerant</Text>
      </Pressable>
      <Group211 style={styles.wrapper} width={48} height={48}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-211.svg")}
        />
      </Group211>
      <Text style={styles.eatingHabits}>Eating Habits</Text>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame2.png")}
      />
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame4.png")}
      />
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("Personal1")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.similarProfiles, styles.omnivoreLayout]}>
          similar profiles
        </Text>
        <View style={styles.omnivoreParent}>
          <Text style={[styles.omnivore, styles.omnivoreLayout]}>Omnivore</Text>
          <Text style={[styles.myEatingHabits, styles.omnivoreLayout]}>
            My Eating Habits
          </Text>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>86%</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildLayout: {
    height: 79,
    width: 327,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    top: 0,
    left: 0,
  },
  editAllergiesPosition: {
    alignItems: "center",
    display: "flex",
    width: 127,
    left: 0,
    top: 0,
    color: Color.grey700,
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
  },
  textTypo: {
    width: 74,
    textAlign: "right",
    lineHeight: 26,
    fontSize: FontSize.headline3_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    color: Color.grey700,
    position: "absolute",
  },
  frameIconLayout: {
    height: 60,
    width: 60,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 96,
    width: 326,
    position: "absolute",
  },
  omnivoreLayout: {
    height: 23,
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  goals: {
    top: 360,
    left: 35,
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    textAlign: "left",
    color: Color.grey700,
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  blog: {
    left: 26,
    top: 39,
    position: "absolute",
  },
  settings1: {
    marginLeft: -33,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    textAlign: "center",
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    lineHeight: 20,
    color: Color.grey700,
    position: "absolute",
  },
  groupChild: {
    height: 79,
    width: 327,
    position: "absolute",
  },
  editAllergies: {
    fontSize: FontSize.size_smi,
    alignItems: "center",
    display: "flex",
    height: 8,
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  editAllergiesWrapper: {
    top: 30,
    height: 8,
    width: 127,
    left: 20,
    position: "absolute",
  },
  text: {
    top: 34,
    left: 235,
    height: 11,
  },
  lactoseIntolerant: {
    top: 45,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interRegular,
    left: 20,
    textAlign: "left",
    color: Color.grey700,
    position: "absolute",
  },
  rectangleParent: {
    top: 147,
    left: 31,
  },
  wrapper: {
    left: 251,
    top: 642,
    position: "absolute",
  },
  eatingHabits: {
    top: 102,
    left: 121,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    color: Color.colorBlack,
    lineHeight: 20,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  frameIcon: {
    left: 44,
    top: 411,
  },
  frameIcon1: {
    left: 219,
    width: 80,
    height: 80,
    top: 411,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon2: {
    top: 599,
    left: 46,
  },
  groupItem: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    top: 0,
    left: 0,
  },
  similarProfiles: {
    top: 50,
    left: 220,
    width: 90,
    color: Color.grey500,
    height: 23,
    fontFamily: FontFamily.interRegular,
  },
  omnivore: {
    top: 26,
    width: 90,
    color: Color.grey500,
    height: 23,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  myEatingHabits: {
    alignItems: "center",
    display: "flex",
    width: 127,
    left: 0,
    top: 0,
    color: Color.grey700,
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
  },
  omnivoreParent: {
    top: 23,
    height: 49,
    width: 127,
    left: 20,
    position: "absolute",
  },
  text1: {
    top: 19,
    left: 236,
    height: 30,
  },
  rectangleGroup: {
    top: 243,
    left: 32,
  },
  settings: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
