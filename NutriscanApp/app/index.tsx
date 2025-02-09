import * as ImagePicker from "expo-image-picker";
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";


export default function FoodScanner() {
    const router = useRouter();
    const [image, setImage] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [history, setHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Open Camera
    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permission Denied", "You need to grant camera permissions to take a photo.");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // Upload Image for Analysis
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
            let response = await fetch("http://10.206.57.212:8080/analyze", {
                method: "POST",
                headers: { "Content-Type": "multipart/form-data" },
                body: formData,
            });

            let jsonResponse = await response.json();
            console.log("LLM Response:", jsonResponse);
            setAnalysisResult(jsonResponse.response);
        } catch (error) {
            Alert.alert("Error", "Failed to analyze image.");
        }
        setLoading(false);
    };

    // Fetch Feedback from Backend
    const fetchFeedback = async () => {
        let response = await fetch("http://10.206.57.212:8080/feedback");
        let jsonResponse = await response.json();
        setFeedback(jsonResponse.feedback);
    };

    // Fetch History from Backend
    const fetchHistory = async () => {
        let response = await fetch("http://10.206.57.212:8080/history");
        let jsonResponse = await response.json();
        setHistory(jsonResponse.history);
    };

    const renderAnalysisResult = () => {
        if (!analysisResult) return <Text style={styles.placeholderText}>No analysis available.</Text>;
    
        try {
            const parsedResult = JSON.parse(analysisResult);
    
            return (
                <View style={styles.responseContainer}>
                    <Text style={styles.sectionTitle}>🍽️ Food Analysis</Text>
                    {parsedResult.main_food_items?.map((item: any, index: number) => (
                        <View key={index} style={styles.resultItem}>
                            <Text style={styles.resultTitle}>🍛 {item.name}</Text>
                            <Text style={styles.resultDetail}>🥗 Alternative: <Text style={styles.resultHighlight}>{item.alternative || "None"}</Text></Text>
                            <Text style={styles.resultDetail}>🔥 Calories: <Text style={styles.resultHighlight}>{item.calories} kcal</Text></Text>
                        </View>
                    ))}
                    {parsedResult.total_calories !== undefined && (
                        <Text style={styles.resultTotal}>⚡ Total Calories: {parsedResult.total_calories} kcal</Text>
                    )}
                </View>
            );
        } catch (error) {
            return <Text style={styles.responseText}>{analysisResult}</Text>;
        }
    };

    const renderFeedbackResult = () => {
        if (!feedback) return <Text style={styles.placeholderText}>No feedback yet.</Text>;
    
        try {
            // ✅ Directly parse the feedback as JSON
            const parsedFeedback = JSON.parse(feedback);
    
            return (
                <View style={styles.responseContainer}>
                    <Text style={styles.sectionTitle}>📝 Health Feedback</Text>
                    {parsedFeedback.suggestions?.map((item: any, index: number) => (
                        <View key={index} style={styles.resultItem}>
                            <Text style={styles.resultTitle}>🍽️ Food: {item.name}</Text>
                            <Text style={styles.resultDetail}>🥗 Alternative: <Text style={styles.resultHighlight}>{item.suggestion || "None"}</Text></Text>
                            <Text style={styles.resultDetail}>📊 Reason: <Text style={styles.resultHighlight}>{item.reason || "No reason provided"}</Text></Text>
                        </View>
                    ))}
                </View>
            );
        } catch (error) {
            console.error("Error parsing feedback:", error);
            return <Text style={styles.responseText}>⚠️ Error processing feedback data.</Text>;
        }
    };
    
    const renderHistoryResult = () => {
        if (!history || history.length === 0) return <Text style={styles.placeholderText}>No meal history available.</Text>;
    
        return (
            <View style={styles.responseContainer}>
                <Text style={styles.sectionTitle}>📜 Meal History</Text>
                {history.map((meal, index) => {
                    let parsedMeal;
    
                    // ✅ Attempt to parse meal.analysis as JSON string
                    try {
                        parsedMeal = JSON.parse(meal.analysis);
                    } catch (error) {
                        console.error("Error parsing meal analysis:", error);
                        return (
                            <View key={index} style={styles.resultItem}>
                                <Text style={styles.resultTitle}>📌 Your Meal</Text>
                                <Text style={styles.resultDetail}>⚠️ Error parsing meal data.</Text>
                            </View>
                        );
                    }
    
                    return (
                        <View key={index} style={styles.resultItem}>
                            <Text style={styles.resultTitle}>📌 Your Meal</Text>
    
                            {/* ✅ Display each food item properly */}
                            {parsedMeal.main_food_items?.map((item: any, itemIndex: number) => (
                                <View key={itemIndex} style={styles.foodItem}>
                                    <Text style={styles.foodTitle}>🍛 {item.name}</Text>
                                    <Text style={styles.foodDetail}>🥗 Alternative: <Text style={styles.foodHighlight}>{item.alternative || "None"}</Text></Text>
                                    <Text style={styles.foodDetail}>🔥 Calories: <Text style={styles.foodHighlight}>{item.calories} kcal</Text></Text>
                                </View>
                            ))}
    
                            {/* ✅ Show total calories if available */}
                            {parsedMeal.total_calories !== undefined && (
                                <Text style={styles.totalCalories}>⚡ Total Calories: {parsedMeal.total_calories} kcal</Text>
                            )}
    
                            {/* ✅ Show meal image if available */}
                            {meal.image_base64 && (
                                <Image source={{ uri: `data:image/jpeg;base64,${meal.image_base64}` }} style={styles.image} />
                            )}
                        </View>
                    );
                })}
            </View>
        );
    };
    
    
    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <Text style={styles.buttonText}>📷 Take Photo</Text>
            </TouchableOpacity>

            {image && <Image source={{ uri: image }} style={styles.image} />}

            <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={analyzeImage} disabled={loading}>
                <Text style={styles.buttonText}>🍽️ Analyze Food</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={fetchFeedback}>
                <Text style={styles.buttonText}>📝 Get Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={fetchHistory}>
                <Text style={styles.buttonText}>📜 View History</Text>
            </TouchableOpacity>


            {loading && <ActivityIndicator size="large" color="blue" style={styles.loadingIndicator} />}

            <ScrollView style={styles.responseBox} nestedScrollEnabled={true}>
                {/* ✅ Formatted Food Analysis */}
                <Text style={styles.sectionTitle}></Text>
                {renderAnalysisResult()} {/* Calls the formatted function */}

                {/* ✅ Formatted Health Feedback */}
                <Text style={styles.sectionTitle}></Text>
                {renderFeedbackResult()}

                {/* ✅ Formatted Meal History */}
                <Text style={styles.sectionTitle}></Text>
                {history.length > -1 ? (
                    renderHistoryResult()
                ) : (
                    <Text style={styles.responseText}>No meal history available.</Text>
                )}
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginVertical: 10,
        width: "80%", // Make button responsive
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonDisabled: {
        backgroundColor: "#A5D6A7",  // Light green when disabled
        opacity: 0.6,  // Reduce opacity
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
    },
    loadingIndicator: {
        marginTop: 20,
    },
    responseBox: {
        width: "90%",
        marginTop: 10,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        maxHeight: 300,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    responseContainer: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    resultItem: {
        backgroundColor: "#E8F5E9",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#C8E6C9",
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2E7D32",
    },
    resultDetail: {
        fontSize: 16,
        color: "#555",
    },
    resultHighlight: {
        fontWeight: "bold",
        color: "#1B5E20",
    },
    resultTotal: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#D84315",
        textAlign: "center",
        marginTop: 10,
    },
    responseText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
    },
    placeholderText: {
        fontSize: 16,
        color: "#aaa",
        textAlign: "center",
    },
    foodItem: {
        backgroundColor: "#E8F5E9", // Light green background for food items
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#C8E6C9", // Soft green border
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    foodTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2E7D32", // Dark green for the main food name
        marginBottom: 5,
    },
    foodDetail: {
        fontSize: 16,
        color: "#555",
        marginBottom: 3,
    },
    foodHighlight: {
        fontWeight: "bold",
        color: "#1B5E20", // Deep green to highlight alternatives
    },
    totalCalories: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#D84315", // Reddish-orange to emphasize total calorie count
        textAlign: "center",
        marginTop: 10,
    },
});
