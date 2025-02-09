import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Rectangle2 from "../assets/rectangle-2.svg";
import Maskgroup from "../assets/mask-group.svg";
import { useNavigation } from "@react-navigation/native";
import Blog1 from "../assets/blog1.svg";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Challenges1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.challenges2, styles.iconLayout]}>
      <Rectangle2
        style={[styles.challenges2Child, styles.challenges2Layout]}
        width={322}
        height={60}
      />
      <Text style={styles.challenges}>Challenges</Text>
      <Text style={styles.koopaHasCompleted}>
        Koopa has completed 60% of his challenges so far.
      </Text>
      <View style={[styles.challenges2Item, styles.rectangleViewLayout]} />
      <View style={[styles.challenges2Inner, styles.challenges2Layout]} />
      <Text style={styles.nudge}>Nudge</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.completed, styles.completedTypo1]}>
        ✅ Completed!
      </Text>
      <View style={[styles.challenges2Inner, styles.challenges2Layout]} />
      <Text style={[styles.youHaveCompleted, styles.completedTypo]}>
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
        style={[styles.theMoreFriends, styles.completedTypo1]}
      >{`The more friends you invite to the challenger, the higher tier your badge will be!
`}</Text>
      <Text style={styles.text}>{`&`}</Text>
      <Maskgroup style={styles.maskGroupIcon} width={17} height={8} />
      <Text style={[styles.louisHasCompleted, styles.completedTypo]}>
        Louis has completed 80% of his challenges so far.
      </Text>
      <Blog1 style={[styles.blog, styles.blogLayout]} width={24} height={24}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/blog1.svg")}
        />
      </Blog1>
      <Pressable
        style={[styles.arrowDown, styles.blogLayout]}
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
  challenges2Layout: {
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 171,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  completedTypo1: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    lineHeight: 15,
    position: "absolute",
  },
  completedTypo: {
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
  blogLayout: {
    height: 24,
    width: 24,
    top: 39,
    position: "absolute",
  },
  challenges2Child: {
    top: 1001,
    left: 101,
  },
  challenges: {
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
  koopaHasCompleted: {
    top: 411,
    fontFamily: FontFamily.jejuHallasan,
    height: 43,
    width: 127,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 15,
    left: 36,
    position: "absolute",
  },
  challenges2Item: {
    top: 289,
    left: 191,
    height: 243,
  },
  challenges2Inner: {
    left: 234,
    backgroundColor: Color.colorDarkgoldenrod_100,
    width: 80,
    height: 20,
    top: 467,
  },
  nudge: {
    top: 469,
    left: 261,
    color: Color.white,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    lineHeight: 15,
    fontFamily: FontFamily.headline5,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleView: {
    top: 291,
    left: 14,
    height: 241,
  },
  completed: {
    left: 72,
    top: 467,
    color: Color.colorBlack,
  },
  youHaveCompleted: {
    top: 405,
    left: 36,
    fontFamily: FontFamily.inderRegular,
  },
  frameIcon: {
    top: 316,
    left: 244,
    width: 65,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  challengeOfThe: {
    top: 224,
    left: 79,
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
    left: 89,
    position: "absolute",
  },
  theMoreFriends: {
    top: 589,
    left: 40,
    color: Color.grey500,
  },
  text: {
    top: 391,
    left: 176,
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
    right: "63.49%",
    bottom: "53.66%",
    left: "19.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  louisHasCompleted: {
    top: 409,
    left: 222,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  blog: {
    left: 26,
  },
  arrowDown: {
    left: 69,
  },
  challenges2: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Challenges1;
