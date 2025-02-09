import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import Circularindeterminateprogressindicator from "../assets/circularindeterminate-progress-indicator.svg";

const Group1 = () => {
  return (
    <View style={styles.circularIndeterminateProgresParent}>
      <Circularindeterminateprogressindicator
        style={styles.circularIndeterminateProgresIcon}
        width={91}
        height={91}
      />
      <Circularindeterminateprogressindicator
        style={styles.circularIndeterminateProgresIcon}
        width={91}
        height={91}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circularIndeterminateProgresIcon: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  circularIndeterminateProgresParent: {
    flex: 1,
    width: "100%",
    height: 91,
  },
});

export default Group1;
