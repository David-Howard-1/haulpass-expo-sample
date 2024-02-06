import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import Info from './screens/Info';
import RecentLocations from './screens/RecentLocations';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from './styles';

const Tab = createBottomTabNavigator();

export default function App() {
  const { blue } = colors;

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator initialRouteName="Recents">
        {/* <Tab.Screen
          options={{
            tabBarIcon: () => <Ionicons name="home" />,
          }}
          name="Home"
          component={Home}
        /> */}
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name="information-circle"
                size={20}
                color={focused ? blue : 'gray'}
              />
            ),
          }}
          name="Info"
          component={Info}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name="globe-outline"
                size={20}
                color={focused ? blue : 'gray'}
              />
            ),
          }}
          name="Recents"
          component={RecentLocations}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
