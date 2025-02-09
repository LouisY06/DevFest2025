import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import Rectangle2 from "../assets/rectangle-2.svg";
import { useNavigation } from "@react-navigation/native";
import Blog from "../assets/blog.svg";
import Maskgroup from "../assets/mask-group.svg";
import Blog1 from "../assets/blog1.svg";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Challenges = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.challenges, styles.iconLayout]}>
      <Rectangle2 style={styles.challengesChild} width={322} height={60} />
      <Text style={styles.challenges1}>Challenges</Text>
      <Blog style={styles.blog} width={24} height={24}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source
        />
      </Blog>
      <Text style={styles.koopaHasCompleted}>
        Koopa has completed 60% of his challenges so far.
      </Text>
      <View style={[styles.challengesItem, styles.challengesLayout]} />
      <View style={[styles.challengesInner, styles.challengesLayout]} />
      <Text style={[styles.youHaveCompleted, styles.completedTypo1]}>
        You have completed 80% of your challenges so far.
      </Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Text style={[styles.challengeOfThe, styles.findAFriendTypo]}>
        Challenge of the week
      </Text>
      <View style={styles.findAFriendToGoOnAWeeklWrapper}>
        <Text style={[styles.findAFriend, styles.findAFriendTypo]}>
          Find a friend to go on a weekly streak!
        </Text>
      </View>
      <Text
        style={[styles.theMoreFriends, styles.completedTypo]}
      >{`The more friends you invite to the challenger, the higher tier your badge will be!
`}</Text>
      <Text style={styles.text}>{`&`}</Text>
      <Maskgroup style={styles.maskGroupIcon} width={17} height={8} />
      <Text style={[styles.louisHasCompleted, styles.completedTypo1]}>
        Louis has completed 80% of his challenges so far.
      </Text>
      <Text style={[styles.completed, styles.completedPosition]}>
        ✅ Completed!
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.completedPosition]}
        onPress={() => navigation.navigate("Challenges1")}
      />
      <Text style={styles.nudge}>Nudge</Text>
      <Blog1
        style={[styles.blog1, styles.blog1Position]}
        width={24}
        height={24}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/blog1.svg")}
        />
      </Blog1>
      <Pressable
        style={[styles.arrowDown, styles.blog1Position]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  challengesLayout: {
    width: 171,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  completedTypo1: {
    fontFamily: FontFamily.inderRegular,
    height: 43,
    width: 127,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  findAFriendTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  completedTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    lineHeight: 15,
  },
  completedPosition: {
    top: 467,
    position: "absolute",
  },
  blog1Position: {
    top: 39,
    height: 24,
    width: 24,
    position: "absolute",
  },
  challengesChild: {
    top: 1001,
    left: 101,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  challenges1: {
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
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  blog: {
    top: 28,
    left: 17,
    position: "absolute",
  },
  koopaHasCompleted: {
    top: 411,
    fontFamily: FontFamily.jejuHallasan,
    height: 43,
    width: 127,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    left: 39,
    position: "absolute",
  },
  challengesItem: {
    top: 289,
    left: 202,
    height: 243,
  },
  challengesInner: {
    top: 291,
    height: 241,
    left: 17,
    width: 171,
    backgroundColor: Color.white,
  },
  youHaveCompleted: {
    top: 405,
    left: 39,
    fontFamily: FontFamily.inderRegular,
  },
  frameIcon: {
    top: 316,
    left: 247,
    width: 65,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  challengeOfThe: {
    top: 224,
    left: 82,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inknutAntiquaSemiBold,
    color: Color.colorBlack,
    lineHeight: 20,
    fontWeight: "600",
    position: "absolute",
  },
  findAFriend: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    fontFamily: FontFamily.headline6,
    color: Color.grey700,
  },
  findAFriendToGoOnAWeeklWrapper: {
    top: 258,
    left: 92,
    position: "absolute",
  },
  theMoreFriends: {
    top: 589,
    left: 43,
    color: Color.grey500,
    position: "absolute",
  },
  text: {
    top: 391,
    left: 179,
    fontSize: FontSize.size_51xl,
    fontFamily: FontFamily.islandMomentsRegular,
    width: 46,
    height: 18,
    textAlign: "left",
    lineHeight: 15,
    color: Color.colorBlack,
    position: "absolute",
  },
  maskGroupIcon: {
    top: "38.33%",
    right: "62.72%",
    bottom: "53.66%",
    left: "19.95%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  louisHasCompleted: {
    top: 409,
    left: 225,
  },
  completed: {
    left: 75,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    lineHeight: 15,
    color: Color.colorBlack,
  },
  rectanglePressable: {
    left: 237,
    backgroundColor: Color.fFAD08,
    width: 80,
    height: 20,
    borderRadius: Border.br_5xl,
  },
  nudge: {
    top: 469,
    left: 264,
    color: Color.white,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    lineHeight: 15,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    position: "absolute",
  },
  blog1: {
    left: 26,
  },
  arrowDown: {
    left: 69,
  },
  challenges: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Challenges;
