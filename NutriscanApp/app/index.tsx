import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, Text, View } from 'react-native';

export default function FoodScanner() {
  const [image, setImage] = useState<string | null>(null);
  // analysisResult is stored as a string or object (the API response)
  const [analysisResult, setAnalysisResult] = useState<any>("Waiting for analysis...");
  const [loading, setLoading] = useState(false);

  // Open camera to take a picture
  const takePhoto = async () => {
    // Request camera permissions first
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permission Denied", "You need to grant camera permissions to take a photo.");
      return;
    }

    // Open Camera
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Render the analysis result by parsing JSON and showing its fields
  const renderAnalysisResult = () => {
    // If analysisResult is an object, try to extract its 'content' property
    if (typeof analysisResult === "object") {
      // If it has a 'content' property and it's a string, attempt to parse it
      if (analysisResult.content && typeof analysisResult.content === "string") {
        try {
          const parsed = JSON.parse(analysisResult.content);
          return renderParsedResult(parsed);
        } catch (error) {
          // If parsing fails, stringify the whole object for display
          return <Text>{JSON.stringify(analysisResult, null, 2)}</Text>;
        }
      } else {
        // Otherwise, simply stringify the object
        return <Text>{JSON.stringify(analysisResult, null, 2)}</Text>;
      }
    } else if (typeof analysisResult === "string") {
      // If it's a string, try to parse it as JSON
      try {
        const parsed = JSON.parse(analysisResult);
        return renderParsedResult(parsed);
      } catch (error) {
        // If parsing fails, render the raw string
        return <Text>{analysisResult}</Text>;
      }
    } else {
      // For other types, just render them as string
      return <Text>{String(analysisResult)}</Text>;
    }
  };

  // Helper function to render the parsed JSON result
  const renderParsedResult = (data: any) => {
    return (
      <View style={{ marginTop: 20 }}>
        {data.main_food_items && data.main_food_items.map((item: any, index: number) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text>Name: {item.name}</Text>
            <Text>Alternative: {item.alternative}</Text>
            <Text>Calories: {item.calories}</Text>
          </View>
        ))}
        {data.total_calories !== undefined && (
          <Text>Total Calories: {data.total_calories}</Text>
        )}
      </View>
    );
  };

  // Upload image to backend for analysis
  const analyzeImage = async () => {
    if (!image) {
      Alert.alert("Error", "Please take a picture first.");
      return;
    }

    setLoading(true);
    let formData = new FormData();
    formData.append("file", {
      uri: image,
      name: "image.jpg",
      type: "image/jpeg",
    } as any);

    try {
      let response = await fetch("http://10.206.57.212:8080/analyze2", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });

      let jsonResponse = await response.json();
      console.log("LLM Response:", jsonResponse);
      // Set the analysisResult; it might be an object or a string
      setAnalysisResult(jsonResponse.response);
    } catch (error) {
      console.error("API Error:", error);
      Alert.alert("Error", "Failed to analyze image.");
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Button title="Take Photo" onPress={takePhoto} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, margin: 10 }}
        />
      )}
      <Button title="Analyze Food" onPress={analyzeImage} disabled={loading} />
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        renderAnalysisResult()
      )}
    </View>
  );
}
