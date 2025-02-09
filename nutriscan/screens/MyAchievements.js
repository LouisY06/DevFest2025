import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Blog1 from "../assets/blog1.svg";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MyAchievements = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myAchievements}>
      <Text style={styles.myAchievements1}>My Achievements</Text>
      <Blog1 style={styles.blog} width={24} height={24}>
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/blog1.svg")}
        />
      </Blog1>
      <Image
        style={[styles.unknown1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/unknown-1.png")}
      />
      <Pressable
        style={[styles.unknown2, styles.iconLayout]}
        onPress={() => navigation.navigate("AchievementScreen")}
      >
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/unknown-21.png")}
        />
      </Pressable>
      <Image
        style={[styles.unknown3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/unknown-3.png")}
      />
      <Image
        style={[styles.images1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/images-1.png")}
      />
      <Image
        style={[styles.unknown4Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/unknown-4.png")}
      />
      <Image
        style={[styles.unknown11Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/unknown-15.png")}
      />
      <Image
        style={[styles.icon2, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/3925263-1.png")}
      />
      <Image
        style={[styles.unknown12Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/unknown-12.png")}
      />
      <Image
        style={[styles.icon3, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/2447774-1.png")}
      />
      <Image
        style={[styles.icon4, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/913376-2.png")}
      />
      <Image
        style={[styles.icon5, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/659334-1.png")}
      />
      <Image
        style={[styles.icon6, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/877951-1.png")}
      />
      <Image
        style={[styles.icon7, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/1046786-1.png")}
      />
      <Image
        style={[styles.icon8, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/2789129-2.png")}
      />
      <Image
        style={[styles.icon9, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/419952-2.png")}
      />
      <Image
        style={[styles.icon10, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/4139162-1.png")}
      />
      <Image
        style={[styles.icon11, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/3151121-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    height: 50,
    position: "absolute",
  },
  iconPosition2: {
    top: 231,
    height: 50,
    width: 50,
    position: "absolute",
  },
  iconPosition1: {
    top: 351,
    height: 50,
    width: 50,
    position: "absolute",
  },
  iconPosition: {
    top: 471,
    height: 50,
    width: 50,
    position: "absolute",
  },
  myAchievements1: {
    marginLeft: -71,
    top: 47,
    left: "50%",
    fontSize: FontSize.headline5_size,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.headline5,
    color: Color.grey700,
    textAlign: "center",
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
  unknown1Icon: {
    width: 50,
    height: 50,
    left: 116,
    top: 111,
  },
  unknown2: {
    width: 53,
    left: 31,
    top: 111,
  },
  unknown3Icon: {
    left: 204,
    width: 50,
    height: 50,
    top: 111,
  },
  images1Icon: {
    left: 294,
    width: 50,
    height: 50,
    top: 111,
  },
  unknown4Icon: {
    left: 31,
  },
  unknown11Icon: {
    left: 204,
  },
  icon2: {
    left: 31,
  },
  unknown12Icon: {
    left: 294,
  },
  icon3: {
    left: 116,
  },
  icon4: {
    left: 116,
  },
  icon5: {
    left: 204,
  },
  icon6: {
    left: 294,
  },
  icon7: {
    left: 31,
  },
  icon8: {
    left: 116,
  },
  icon9: {
    left: 204,
  },
  icon10: {
    top: 591,
    left: 31,
    width: 50,
    height: 50,
  },
  icon11: {
    left: 294,
  },
  myAchievements: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyAchievements;
