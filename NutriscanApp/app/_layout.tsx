import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
      <Tabs screenOptions={{ headerShown: false }}>  {/* ✅ Remove top bar */}
          <Tabs.Screen
              name="index"
              options={{
                  title: "Scan Food",
                  tabBarStyle: { height: 40 },  // ✅ Reduce bottom bar size
              }}
          />
      </Tabs>
  );
}
