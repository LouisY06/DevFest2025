import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Sample friend data
const friends = [
  {
    id: "1",
    name: "Louis",
    date: "10 Jan 2022",
    diet: "Vegan",
    score: 75,
    avatar: require("../assets/images/happy1.png"),
    profileLink: "/louisprofile", // ✅ Louis's profile page
  },
  {
    id: "2",
    name: "Leo",
    date: "10 Jan 2022",
    diet: "Halal",
    score: 57,
    avatar: require("../assets/images/happy2.png"),
  },
  {
    id: "3",
    name: "David",
    date: "10 Jan 2022",
    diet: "Omni",
    score: 91,
    avatar: require("../assets/images/happy3.png"),
  },
  {
    id: "4",
    name: "Stella",
    date: "10 Jan 2022",
    diet: "Omni",
    score: 88,
    avatar: require("../assets/images/happy4.png"),
  },
  {
    id: "5",
    name: "Tony",
    date: "10 Jan 2022",
    diet: "Halal",
    score: 96,
    avatar: require("../assets/images/happy5.png"),
  },
  {
    id: "6",
    name: "Jae",
    date: "10 Jan 2022",
    diet: "Omni",
    score: 34,
    avatar: require("../assets/images/happy6.png"),
  },
];

export default function FriendList() {
  const router = useRouter();

  // ✅ Fixed Navigation for Louis
  const renderFriend = ({ item }: { item: typeof friends[0] }) => (
    <TouchableOpacity
      style={styles.friendCard}
      onPress={() => {
        console.log(`Clicked: ${item.name}`);
        if (item.profileLink) {
          console.log("Navigating to:", item.profileLink);
          router.push("/louisprofile"); // ✅ FIXED: Ensure it's a string
        }
      }}
    >
      <View style={styles.friendInfo}>
        <Image source={item.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.friendName}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.friendStats}>
        <Text style={styles.friendScore}>{item.score}</Text>
        <Text style={styles.friendDiet}>{item.diet}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Friends List</Text>
      </View>

      {/* Friends List */}
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={renderFriend}
        contentContainerStyle={styles.friendList}
      />

      {/* Add Friend Button */}
      <TouchableOpacity style={styles.addFriendButton}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  friendList: {
    paddingBottom: 20,
  },
  friendCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  friendInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
  friendStats: {
    alignItems: "flex-end",
  },
  friendScore: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  friendDiet: {
    fontSize: 12,
    color: "#777",
  },
  addFriendButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#4A9780",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});