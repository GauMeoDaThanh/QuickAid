import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500 font-bold">HELLO WORLD!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
