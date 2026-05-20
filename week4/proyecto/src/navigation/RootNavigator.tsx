import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { HomeStackParamList, RootTabParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SavedScreen from '../screens/SavedScreen';
import { COLORS } from '../theme';
import { useSavedStore } from '../stores/savedStore';

const Tab = createBottomTabNavigator<RootTabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
      }}
    >
      <HomeStack.Screen name="HomeList" component={HomeScreen} options={{ title: 'Auditorías' }} />
      <HomeStack.Screen name="HomeDetail" component={DetailScreen} options={{ title: 'Detalle' }} />
    </HomeStack.Navigator>
  );
}

export default function RootNavigator() {
  const savedCount = useSavedStore((state) => state.savedItems.length);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'document-text';
            if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Saved') iconName = focused ? 'heart' : 'heart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.accent,
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Inicio' }} />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            title: 'Guardados',
            tabBarBadge: savedCount > 0 ? savedCount : undefined,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}