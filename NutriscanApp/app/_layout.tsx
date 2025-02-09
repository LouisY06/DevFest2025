import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
      <Tabs screenOptions={{ headerShown: false }}>  {/* ✅ Remove top bar */}
          <Tabs.Screen
              name="index"
              options={{
                  title: "Home",
                  tabBarStyle: { height: 40 },  // ✅ Reduce bottom bar size
              }}
          />
        <Tabs.Screen name="profile" options={{ title: 'Profile' }} />

      </Tabs>
  );
}
