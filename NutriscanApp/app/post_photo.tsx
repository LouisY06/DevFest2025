import { useGlobalSearchParams } from "expo-router";
import "expo-router/entry";
import React from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PostPhoto() {
  // 1. Deconstruct 'photoUri' from the params
  const { photoUri } = useGlobalSearchParams();

  // 2. Coerce it to a string (in case it's null/undefined)
  const finalUri = String(photoUri ?? '');

  const handlePost = () => {
    Alert.alert("Post Submitted", "Your photo has been posted successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review & Post</Text>

      {/* Display the photo if it exists */}
      {finalUri ? (
        <Image source={{ uri: finalUri }} style={styles.photoPreview} />
      ) : (
        <Text style={styles.infoText}>No photo available</Text>
      )}

      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  photoPreview: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 30,
    resizeMode: "cover",
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  postButton: {
    backgroundColor: "#4A9780",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  postButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
