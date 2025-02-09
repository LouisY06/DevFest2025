// Profile.tsx

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function Profile() {
  const router = useRouter();

  // Existing profile-related state can be here...
  // New state for meal history and health feedback:
  const [feedback, setFeedback] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loadingFeedback, setLoadingFeedback] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(false);

  // Fetch feedback and history when the component mounts:
  useEffect(() => {
    fetchFeedback();
    fetchHistory();
  }, []);

  const fetchFeedback = async () => {
    try {
      setLoadingFeedback(true);
      const response = await fetch("http://10.206.57.212:8080/feedback");
      const jsonResponse = await response.json();
      setFeedback(jsonResponse.feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    } finally {
      setLoadingFeedback(false);
    }
  };

  const fetchHistory = async () => {
    try {
      setLoadingHistory(true);
      const response = await fetch("http://10.206.57.212:8080/history");
      const jsonResponse = await response.json();
      setHistory(jsonResponse.history);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoadingHistory(false);
    }
  };

  // Render the health feedback (recommendations) section.
  const renderFeedbackResult = () => {
    if (!feedback) {
      return <Text style={styles.placeholderText}>No feedback available.</Text>;
    }
    try {
      const parsedFeedback = JSON.parse(feedback);
      return (
        <View style={styles.responseContainer}>
          <Text style={styles.sectionTitle}>📝 Health Feedback</Text>
          {parsedFeedback.suggestions?.map((item: any, index: number) => (
            <View key={index} style={styles.resultItem}>
              <Text style={styles.resultTitle}>Food: {item.name}</Text>
              <Text style={styles.resultDetail}>
                Alternative: <Text style={styles.resultHighlight}>{item.suggestion || "None"}</Text>
              </Text>
              <Text style={styles.resultDetail}>
                Reason: <Text style={styles.resultHighlight}>{item.reason || "No reason provided"}</Text>
              </Text>
            </View>
          ))}
        </View>
      );
    } catch (error) {
      console.error("Error parsing feedback:", error);
      return <Text style={styles.responseText}>⚠️ Error processing feedback data.</Text>;
    }
  };

  // Render the meal history section.
  const renderHistoryResult = () => {
    if (!history || history.length === 0) {
      return <Text style={styles.placeholderText}>No meal history available.</Text>;
    }
    return (
      <View style={styles.responseContainer}>
        <Text style={styles.sectionTitle}>📜 Meal History</Text>
        {history.map((meal, index) => {
          let parsedMeal;
          try {
            parsedMeal = JSON.parse(meal.analysis);
          } catch (error) {
            // console.error("Error parsing meal analysis:", error);
            return (
              <View key={index} style={styles.resultItem}>
                <Text style={styles.resultTitle}>Meal</Text>
                <Text style={styles.resultDetail}>Error parsing meal data.</Text>
              </View>
            );
          }
          return (
            <View key={index} style={styles.resultItem}>
              <Text style={styles.resultTitle}>Meal</Text>
              {parsedMeal.main_food_items?.map((item: any, itemIndex: number) => (
                <View key={itemIndex} style={styles.foodItem}>
                  <Text style={styles.foodTitle}>🍛 {item.name}</Text>
                  <Text style={styles.foodDetail}>
                    Alternative: <Text style={styles.foodHighlight}>{item.alternative || "None"}</Text>
                  </Text>
                  <Text style={styles.foodDetail}>
                    Calories: <Text style={styles.foodHighlight}>{item.calories} kcal</Text>
                  </Text>
                </View>
              ))}
              {parsedMeal.total_calories !== undefined && (
                <Text style={styles.totalCalories}>
                  Total Calories: {parsedMeal.total_calories} kcal
                </Text>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}  contentContainerStyle={{ paddingBottom: 60 }}
>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>Profile</Text>

      {/* My Stats Section */}
      <View style={styles.statsCard}>
        <View style={styles.profileRow}>
          <Image
            source={require('../assets/images/Mask group.png')}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Koopa Troopa</Text>
            <Text style={styles.userDetails}>NutriScan lover since 2025</Text>
            <Text style={styles.userDetails}>Omnivore, male</Text>
            <Text style={styles.userDOB}>DOB: 2005/02/02</Text>
          </View>
        </View>

        {/* Nutrition Icons */}
        <View style={styles.nutritionRow}>
          <Image source={require('../assets/images/water.png')} style={styles.icon} />
          <Image source={require('../assets/images/fries.png')} style={styles.icon} />
          <Image source={require('../assets/images/sushi.png')} style={styles.icon} />
        </View>
      </View>

      {/* New Achievements Section */}
      <Text style={styles.sectionTitle}>New Achievements</Text>
      <View style={styles.achievementsCard}>
        <View style={styles.achievementRow}>
          <Image source={require('../assets/images/muscle.png')} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>
            <Text style={styles.boldText}>You and Louis</Text> completed a week-long shared health streak together!{'\n'}
            <Text style={styles.dateText}>September 07, 2024</Text>
          </Text>
        </View>

        <View style={styles.achievementRow}>
          <Image source={require('../assets/images/trophy.png')} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>
            <Text style={styles.boldText}>You and David</Text> completed a year-long shared health streak together!{'\n'}
            <Text style={styles.dateText}>August, 2024</Text>
          </Text>
        </View>

        <View style={styles.achievementRow}>
          <Image source={require('../assets/images/diamond.png')} style={styles.achievementIcon} />
          <Text style={styles.achievementText}>
            <Text style={styles.boldText}>You</Text> completed your 1st badge!{'\n'}
            <Text style={styles.dateText}>August, 2024</Text>
          </Text>
        </View>
      </View>

      {/* View All Achievements Button */}
      <TouchableOpacity style={styles.achievementsButton} onPress={() => router.push('/achievements')}>
        <Text style={styles.achievementsButtonText}>View All Achievements</Text>
      </TouchableOpacity>

      {/* Meal History Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Meal History</Text>
        {loadingHistory ? (
          <Text style={styles.placeholderText}>Loading...</Text>
        ) : (
          renderHistoryResult()
        )}
      </View>

      {/* Health Feedback Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Health Feedback</Text>
        {loadingFeedback ? (
          <Text style={styles.placeholderText}>Loading...</Text>
        ) : (
          renderFeedbackResult()
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4A4A4A',
    marginTop: 30,
    marginBottom: 20,
  },
  statsCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
  },
  userDOB: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#222',
  },
  achievementsCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  achievementText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#222',
  },
  dateText: {
    fontSize: 12,
    color: '#777',
  },
  achievementsButton: {
    backgroundColor: "#4A9780",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
  },
  achievementsButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  // New styles for the feedback and history sections:
  sectionContainer: {
    marginBottom: 30,
  },
  responseContainer: {
    padding: 10,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    marginBottom: 10,
  },
  resultItem: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  resultDetail: {
    fontSize: 14,
    color: '#555',
  },
  resultHighlight: {
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  responseText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
  },
  foodItem: {
    backgroundColor: '#E8F5E9',
    padding: 8,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#C8E6C9',
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  foodDetail: {
    fontSize: 14,
    color: '#555',
  },
  foodHighlight: {
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  totalCalories: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D84315',
    textAlign: 'center',
    marginTop: 10,
  },
});

