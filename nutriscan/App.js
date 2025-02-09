const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Landing from "./screens/Landing";
import Rectangle7 from "./screens/Rectangle7";
import Unknown4 from "./screens/Unknown4";
import Rectangle12 from "./screens/Rectangle12";
import Rectangle5 from "./screens/Rectangle5";
import Unknown from "./screens/Unknown";
import Rectangle4 from "./screens/Rectangle4";
import Rectangle11 from "./screens/Rectangle11";
import Rectangle9 from "./screens/Rectangle9";
import Rectangle3 from "./screens/Rectangle3";
import Unknown3 from "./screens/Unknown3";
import Unknown5 from "./screens/Unknown5";
import Rectangle10 from "./screens/Rectangle10";
import Unknown2 from "./screens/Unknown2";
import FluentfoodApple20Filled from "./screens/FluentfoodApple20Filled";
import Rectangle6 from "./screens/Rectangle6";
import Rectangle1 from "./screens/Rectangle1";
import Rectangle2 from "./screens/Rectangle2";
import Rectangle from "./screens/Rectangle";
import Images from "./screens/Images";
import Unknown1 from "./screens/Unknown1";
import Rectangle8 from "./screens/Rectangle8";
import Challenges from "./screens/Challenges";
import EatingHabitEdit1 from "./screens/EatingHabitEdit1";
import PhbowlFoodFill from "./screens/PhbowlFoodFill";
import AchievementScreen from "./screens/AchievementScreen";
import LouisProfile from "./screens/LouisProfile";
import Personal from "./screens/Personal";
import Allergies from "./screens/Allergies";
import Group from "./screens/Group";
import Settings from "./screens/Settings";
import Challenges1 from "./screens/Challenges1";
import Friends from "./screens/Friends";
import Goals from "./screens/Goals";
import Group1 from "./screens/Group1";
import AddEatingHabit from "./screens/AddEatingHabit";
import MyAchievements from "./screens/MyAchievements";
import MyStreaks from "./screens/MyStreaks";
import Personal1 from "./screens/Personal1";
import EatingHabitEdit from "./screens/EatingHabitEdit";
import Frame from "./screens/Frame";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inder-Regular": require("./assets/fonts/Inder-Regular.ttf"),
    "InknutAntiqua-Regular": require("./assets/fonts/InknutAntiqua-Regular.ttf"),
    "InknutAntiqua-SemiBold": require("./assets/fonts/InknutAntiqua-SemiBold.ttf"),
    "IslandMoments-Regular": require("./assets/fonts/IslandMoments-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle7"
              component={Rectangle7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Unknown4"
              component={Unknown4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle12"
              component={Rectangle12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle5"
              component={Rectangle5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Unknown"
              component={Unknown}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle4"
              component={Rectangle4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle11"
              component={Rectangle11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle9"
              component={Rectangle9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle3"
              component={Rectangle3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Unknown3"
              component={Unknown3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Unknown5"
              component={Unknown5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle10"
              component={Rectangle10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Unknown2"
              component={Unknown2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FluentfoodApple20Filled"
              component={FluentfoodApple20Filled}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle6"
              component={Rectangle6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle1"
              component={Rectangle1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle2"
              component={Rectangle2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle"
              component={Rectangle}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Images"
              component={Images}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Unknown1"
              component={Unknown1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle8"
              component={Rectangle8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Challenges"
              component={Challenges}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EatingHabitEdit1"
              component={EatingHabitEdit1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhbowlFoodFill"
              component={PhbowlFoodFill}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AchievementScreen"
              component={AchievementScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LouisProfile"
              component={LouisProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Personal"
              component={Personal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Allergies"
              component={Allergies}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Challenges1"
              component={Challenges1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Friends"
              component={Friends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Goals"
              component={Goals}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group1"
              component={Group1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddEatingHabit"
              component={AddEatingHabit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyAchievements"
              component={MyAchievements}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyStreaks"
              component={MyStreaks}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Personal1"
              component={Personal1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EatingHabitEdit"
              component={EatingHabitEdit}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
