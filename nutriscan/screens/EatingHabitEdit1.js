import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import Group21 from "../assets/group-21.svg";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const EatingHabitEdit1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.eatingHabitEdit, styles.iconLayout]}>
      <Pressable
        style={[styles.arrowDown, styles.arrowDownLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
      <GroupComponent addEatingHabit="Add Eating Habit" />
      <Group21
        style={[
          styles.eatingHabitEditChild,
          styles.eatingHabitEditChildPosition,
        ]}
        width={60}
        height={60}
      />
      <Text style={[styles.aiRecomendations, styles.looksLikeYouTypo]}>
        AI Recomendations
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.arrowDownLayout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={styles.frameView} />
      </View>
      <Image
        style={[
          styles.d93b77b0b3888723817d41391d122Icon,
          styles.eatingHabitEditChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/51d93b77b0b3888723817d41391d122-1.png")}
      />
      <Text style={[styles.looksLikeYouContainer, styles.tiramisuIsHighTypo]}>
        <Text style={styles.looksLikeYouTypo}>{`Looks like you had some: 
`}</Text>
        <Text style={styles.tiramisuTypo}>Tiramisu</Text>
      </Text>
      <Text style={[styles.tiramisuIsHigh, styles.tiramisuTypo]}>
        “Tiramisu is high in sugar and saturated fat. One slice can contain 300+
        calories—about 20% of a typical daily calorie goal! Keep an eye on your
        sugar intake for the rest of the day.”
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  arrowDownLayout: {
    height: 24,
    position: "absolute",
  },
  eatingHabitEditChildPosition: {
    left: 66,
    position: "absolute",
  },
  looksLikeYouTypo: {
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
  },
  groupChildLayout: {
    height: 379,
    width: 333,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 156,
    width: 164,
    position: "absolute",
  },
  tiramisuIsHighTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tiramisuTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
  },
  icon: {
    height: "100%",
  },
  arrowDown: {
    top: 39,
    width: 24,
    left: 26,
  },
  eatingHabitEditChild: {
    top: 119,
  },
  aiRecomendations: {
    marginLeft: -76,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    lineHeight: 20,
    color: Color.grey700,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    height: 379,
    width: 333,
    position: "absolute",
  },
  groupItem: {
    top: 92,
    left: 43,
    width: 185,
  },
  rectangleParent: {
    top: 102,
    left: 26,
  },
  groupInner: {
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  frameView: {
    top: 38,
    left: 21,
    width: 91,
    height: 10,
    position: "absolute",
  },
  rectangleGroup: {
    top: 527,
    left: 29,
  },
  d93b77b0b3888723817d41391d122Icon: {
    top: 140,
    width: 160,
    height: 120,
  },
  looksLikeYouContainer: {
    top: 286,
    left: 70,
    width: 156,
    height: 21,
  },
  tiramisuIsHigh: {
    top: 340,
    left: 72,
    width: 242,
    height: 107,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  eatingHabitEdit: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
  },
});

export default EatingHabitEdit1;
