import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import Group21 from "../assets/group-21.svg";
import Group29 from "../assets/group-29.svg";
import GroupComponent4 from "../components/GroupComponent4";
import Ellipse11 from "../assets/ellipse-11.svg";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Goals = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.goals, styles.iconLayout]}>
      <Text style={[styles.goals1, styles.goals1Typo]}>Goals</Text>
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
      <GroupComponent
        groupViewTop={315}
        groupViewLeft={28}
        addEatingHabit="Add Goal"
      />
      <Group21 style={styles.goalsChild} width={60} height={60} />
      <View style={[styles.goalsInner, styles.goalsInnerLayout]}>
        <View style={[styles.addGoalWrapper, styles.goalsInnerLayout]}>
          <Text style={[styles.addGoal, styles.goals1Typo]}>Add Goal</Text>
        </View>
      </View>
      <Group29 style={styles.goalsChild} width={60} height={60} />
      <GroupComponent4 />
      <Ellipse11 style={styles.ellipseIcon} width={20} height={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  goals1Typo: {
    color: Color.grey700,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
  },
  goalsInnerLayout: {
    height: 43,
    width: 185,
    position: "absolute",
  },
  goals1: {
    marginLeft: -22,
    top: 41,
    left: "50%",
    fontSize: FontSize.headline5_size,
    lineHeight: 20,
    textAlign: "center",
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
  goalsChild: {
    top: 333,
    left: 68,
    position: "absolute",
  },
  addGoal: {
    fontSize: FontSize.headline4_size,
    lineHeight: 24,
    textAlign: "left",
  },
  addGoalWrapper: {
    top: 0,
    left: 0,
  },
  goalsInner: {
    top: 413,
    left: 71,
  },
  ellipseIcon: {
    top: 128,
    left: 319,
    position: "absolute",
  },
  goals: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
  },
});

export default Goals;
