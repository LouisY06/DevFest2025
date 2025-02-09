import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      router.push({ pathname: "/tabs/results", params: { imageUri: photo.uri } });
    }
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Camera ref={cameraRef} style={styles.camera} />
      <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
        <Ionicons name="camera" size={50} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 50,
  },
});
