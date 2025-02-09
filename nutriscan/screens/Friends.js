import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import Rectangle2 from "../assets/rectangle-2.svg";
import { useNavigation } from "@react-navigation/native";
import Blog1 from "../assets/blog1.svg";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import Group211 from "../assets/group-211.svg";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Friends = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.friends}>
      <Rectangle2 style={styles.friendsChild} width={322} height={60} />
      <Text style={styles.friendsList}>Friends List</Text>
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
      <FrameComponent1 />
      <FrameComponent
        prop="57"
        halal="Halal"
        leo="Leo"
        frame={
          <Image
            style={styles.frameIcon1}
            source={require("../assets/frame6.png")}
          />
        }
      />
      <FrameComponent
        frameViewTop={279}
        frameViewLeft={31}
        frameViewLeft1={276}
        prop="91"
        halal="Omni"
        leo="David"
        leoFontFamily="InknutAntiqua-SemiBold"
        frame={
          <Image
            style={styles.frameIcon2}
            source={require("../assets/frame7.png")}
          />
        }
      />
      <FrameComponent2 />
      <FrameComponent
        frameViewTop={465}
        frameViewLeft={31}
        frameViewLeft1={277}
        prop="96"
        halal="Halal"
        leo="Tony"
        leoFontFamily="InknutAntiqua-SemiBold"
        frame={
          <Image
            style={styles.frameIcon3}
            source={require("../assets/frame8.png")}
          />
        }
      />
      <FrameComponent
        frameViewTop={558}
        frameViewLeft={31}
        frameViewLeft1={276}
        prop="34"
        halal="Omni"
        leo="Jae"
        leoFontFamily="InknutAntiqua-SemiBold"
        frame={
          <Image
            style={styles.frameIcon4}
            source={require("../assets/frame9.png")}
          />
        }
      />
      <Group211 style={styles.wrapper} width={48} height={48}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-211.svg")}
        />
      </Group211>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogLayout: {
    height: 24,
    width: 24,
    top: 39,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  friendsChild: {
    top: 1001,
    left: 101,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  friendsList: {
    marginLeft: -46,
    top: 41,
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
  },
  arrowDown: {
    left: 69,
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
  frameIcon3: {
    position: "absolute",
    top: 7,
    left: 7,
    width: 65,
    height: 65,
    overflow: "hidden",
  },
  frameIcon4: {
    position: "absolute",
    top: 7,
    left: 7,
    width: 65,
    height: 65,
    overflow: "hidden",
  },
  wrapper: {
    left: 171,
    top: 702,
    position: "absolute",
  },
  frameIcon: {
    top: 376,
    left: 35,
    width: 65,
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  friends: {
    backgroundColor: Color.grey100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Friends;
