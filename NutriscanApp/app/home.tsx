import { Ionicons } from "@expo/vector-icons";
import "expo-router/entry";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  // Mock feed data
  const feedData = [
    {
      id: 1,
      username: "Louis",
      time: "1h ago",
      text: "Yummy!",
      avatar: require("../assets/images/happy1.png"), // Profile Avatar
      image: require("../assets/images/food1.png"), // Food Image
    },
    {
      id: 2,
      username: "Leo",
      time: "1h ago",
      text: "Delicious!",
      avatar: require("../assets/images/happy2.png"),
      image: require("../assets/images/food2.png"),
    },
    {
      id: 3,
      username: "David",
      time: "1h ago",
      text: "Look at my food!",
      avatar: require("../assets/images/happy3.png"),
      image: require("../assets/images/food3.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* 📢 Weekly Challenge Banner */}
      <TouchableOpacity style={styles.challengeBanner}>
        <Text style={styles.challengeText}>The Challenge of the week is here</Text>
        <Ionicons name="chevron-forward" size={20} color="white" />
      </TouchableOpacity>

      {/* 📝 Feed */}
      <ScrollView style={styles.feed}>
        {feedData.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={post.avatar} style={styles.avatar} />
              <View>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.timestamp}>{post.time}</Text>
              </View>
            </View>
            <Text style={styles.postText}>{post.text}</Text>
            <Image source={post.image} style={styles.postImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  challengeBanner: {
    flexDirection: "row",
    backgroundColor: "#4A9780",
    borderRadius: 20,
    padding: 15,
    margin: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  challengeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  feed: {
    flex: 1,
    paddingHorizontal: 15,
  },
  postCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
  },
  postText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

