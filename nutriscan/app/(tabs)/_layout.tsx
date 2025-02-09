import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function Layout() {
  const router = useRouter();  // Fix navigation

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 70,
          position: "absolute",  // Ensure tab bar remains fixed
          bottom: 10,
          left: 20,
          right: 20,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }) => <Ionicons name="images" size={size} color={color} />,
        }}
      />

      {/* Centered Camera Button */}
      <Tabs.Screen
        name="scan"
        options={{
          title: "Camera",
          tabBarButton: () => (
            <View
              style={{
                position: "absolute",
                bottom: 30,
                left: "50%",
                transform: [{ translateX: -35 }],  // Center horizontally
              }}
            >
              <TouchableOpacity
                onPress={() => router.push("/scan")}
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#FFD700",
                  borderRadius: 35,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.3,
                  shadowOffset: { width: 0, height: 2 },
                  elevation: 5,
                }}
              >
                <Ionicons name="camera" size={34} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="streaks"
        options={{
          title: "Streaks",
          tabBarIcon: ({ color, size }) => <Ionicons name="flame" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
