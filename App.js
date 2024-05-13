import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Pages
import Home from './pages/Home';
import Alert from './pages/Alert';
import News from './pages/News';
import Council from './pages/Council';
import Map from './pages/Map';
import Call from './pages/Call';

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator id="BottomDrawer"  screenOptions={{headerShown:false, initialRouteName:'Home'}}>
          <Tab.Screen name="Council" component={Council} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="bank" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="News" component={News} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="newspaper" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="Home" component={Home} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="Map" component={Map} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Entypo name="map" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen name="Call" component={Call} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="call" color={color} size={size} />
              ),
            }}
          />
          {/** */}
          <Tab.Screen name="Alert" component={Alert} 
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="alert" color={color} size={size} />
              ),
            }}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
