// app/post_photo.tsx

import { useGlobalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const ANALYZE_URL = "http://10.206.57.212:8080/analyze";
// Example meal creation endpoint
const CREATE_MEAL_URL = "http://10.206.57.212:8080/meals/meals/";

type FoodOption = "dish" | "alt" | "other";
interface SelectedOptionsState {
  [index: number]: FoodOption; 
}

export default function PostPhoto() {
  const router = useRouter();
  const { photoUri } = useGlobalSearchParams();

  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Holds user’s chosen comment
  const [comment, setComment] = useState("");

  // Which option is selected for each dish: “dish”, “alt”, or “other”
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsState>({});

  // Automatically analyze the photo on mount
  useEffect(() => {
    if (photoUri) {
      analyzePhoto(String(photoUri));
    }
  }, [photoUri]);

  // 1. Analyze the photo using your backend (similar to your existing code)
  const analyzePhoto = async (uri: string) => {
    setLoading(true);
    let formData = new FormData();
    formData.append("file", {
      uri,
      name: "image.jpg",
      type: "image/jpeg",
    } as any);

    try {
      const response = await fetch(ANALYZE_URL, {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });
      const jsonResponse = await response.json();
      setAnalysisResult(jsonResponse.response);
    } catch (error) {
      console.error("Analysis Error:", error);
      Alert.alert("Error", "Failed to analyze the photo.");
    }
    setLoading(false);
  };

  // 2. When a user taps a button (dish, alt, or other)
  const handleOptionPress = (itemIndex: number, option: FoodOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [itemIndex]: option,
    }));
  };

  // 3. Render the analysis with three stacked buttons for each item
  const renderAnalysis = () => {
    if (!analysisResult) {
      return <Text style={styles.placeholderText}>No analysis available.</Text>;
    }
    try {
      const parsed = JSON.parse(analysisResult);
      if (!parsed.main_food_items?.length) {
        return <Text style={styles.placeholderText}>No food items found.</Text>;
      }
      return (
        <View style={styles.responseContainer}>
          <Text style={styles.sectionTitle}>🍽️ Food Analysis</Text>
          {parsed.main_food_items.map((item: any, index: number) => {
            const selected = selectedOptions[index] || "dish"; 
            return (
              <View key={index} style={styles.itemContainer}>
                {/* Dish Button */}
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    selected === "dish" ? styles.optionSelected : styles.optionUnselected,
                  ]}
                  onPress={() => handleOptionPress(index, "dish")}
                >
                  <Text style={styles.buttonText}>{item.name || "N/A"}</Text>
                </TouchableOpacity>

                {/* Alt Button */}
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    selected === "alt" ? styles.optionSelected : styles.optionUnselected,
                  ]}
                  onPress={() => handleOptionPress(index, "alt")}
                >
                  <Text style={styles.buttonText}>{item.alternative || "None"}</Text>
                </TouchableOpacity>

                {/* Other Button */}
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    selected === "other" ? styles.optionSelected : styles.optionUnselected,
                  ]}
                  onPress={() => handleOptionPress(index, "other")}
                >
                  <Text style={styles.buttonText}>Other</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          {/* If total_calories is present, show it */}
          {parsed.total_calories !== undefined && (
            <Text style={styles.resultTotal}>
              ⚡ Total Calories: {parsed.total_calories} kcal
            </Text>
          )}
        </View>
      );
    } catch (err) {
      return (
        <Text style={styles.placeholderText}>
          Couldn’t parse analysis result: {analysisResult}
        </Text>
      );
    }
  };

  // 4. Post the meal data to your backend
// 4. Post the meal data to your backend
const handlePost = async () => {
    // Ensure analysisResult is available
    if (!analysisResult) {
      Alert.alert("No Analysis", "Please wait until the image is analyzed.");
      return;
    }
  
    // Parse the analysis result
    let parsed;
    try {
      parsed = JSON.parse(analysisResult);
    } catch (err) {
      Alert.alert("Error", "Analysis result not valid JSON.");
      return;
    }
  
    const main_food_items = parsed.main_food_items || [];
    // Build an array of final dishes based on the user's selected options
    const finalDishes = main_food_items.map((item: any, index: number) => {
      const choice = selectedOptions[index] || "dish"; 
      let chosenName = item.name;
      if (choice === "alt") chosenName = item.alternative || "None";
      else if (choice === "other") chosenName = "Other";
  
      return {
        name: chosenName,
        calories: item.calories || 0,
      };
    });
  
    // Build the payload, hard coding image_url to a relative path
    const payload = {
      user_id: "user123",          // Your actual user ID
      username: "Cooper",          // Example username
      user_icon_link: "https://example.com/avatar.png",
      date: new Date().toISOString().split("T")[0], // Today's date in YYYY-MM-DD format
      dishes: finalDishes,
      total_calories: parsed.total_calories || 0,
      image_url: "../assets/images/Mask group.png", // Hard-coded relative path
      comment, // The user’s typed comment
    };
  
    console.log(payload);
  
    try {
      const response = await fetch(CREATE_MEAL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const result = await response.json();
      console.log("Meal creation response:", result);
  
      Alert.alert("Posted", "Your meal has been created!");
      // Navigate to home
      router.push("/home");
    } catch (error) {
      console.error("Post Error:", error);
      Alert.alert("Error", "Failed to create meal.");
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review & Post</Text>

      {photoUri ? (
        <Image source={{ uri: String(photoUri) }} style={styles.photoPreview} resizeMode="cover" />
      ) : (
        <Text style={styles.infoText}>No photo available</Text>
      )}

      {loading && <ActivityIndicator size="large" color="blue" style={styles.loadingIndicator} />}

      {/* A user comment text area */}
      <TextInput
        style={styles.commentInput}
        placeholder="Add a comment..."
        value={comment}
        onChangeText={setComment}
      />

      <ScrollView style={styles.analysisBox} nestedScrollEnabled>
        {renderAnalysis()}
      </ScrollView>

      {/* Post button at bottom */}
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  photoPreview: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginVertical: 15,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginVertical: 15,
  },
  loadingIndicator: {
    marginBottom: 10,
  },
  commentInput: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  analysisBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    maxHeight: 300,
    padding: 10,
    elevation: 3,
  },
  responseContainer: {
    padding: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  itemContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  optionButton: {
    width: "80%",
    height: 50,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  optionSelected: {
    backgroundColor: "#4CAF50", // green
  },
  optionUnselected: {
    backgroundColor: "#BDBDBD", // gray
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultTotal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D84315",
    textAlign: "center",
    marginTop: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginVertical: 10,
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
