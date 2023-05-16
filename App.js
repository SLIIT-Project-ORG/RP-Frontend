import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import RegisterPage from './components/Other/Register';
import LoginPage from './components/Other/login';
import GetStartedPage from './components/Other/GetStart';
import HomePage from './components/Other/Home';
import ImageUpload from './components/prescription_reading/ImageUpload';
import PrescriptionDetailsPage from './components/prescription_reading/Cleartext';
import VoicePage from './components/Disease_Recognition/VoiceInput';
import ChatScreen from './components/Disease_Recognition/ChatScreen';

const Stack = createStackNavigator();
const App = () => {
  return (

    <NavigationContainer><View style={styles.container}>
      <Stack.Navigator>
        {/* Other screens */}

        {/* Get Start Page */}
        <Stack.Screen name="AYUU APP" component={GetStartedPage} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },


        }} />
        
         {/* Login Page */}
        <Stack.Screen name="Login Page" component={LoginPage} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
        }} />

       {/* Register Page */}
        <Stack.Screen name="Register Page" component={RegisterPage} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

          {/* Home Page */}
          <Stack.Screen name="Home Page" component={HomePage} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

      {/* prescription Upload Page */}
      <Stack.Screen name="Image Upload Page" component={ImageUpload} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />


        {/* prescription Text Page */}
        <Stack.Screen name="Prescription identify Page" component={PrescriptionDetailsPage} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

       {/* Disease Identify Page */}
       <Stack.Screen name="Diseaseidentify Page" component={VoicePage} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />

       {/* Chat Page */}
       <Stack.Screen name="Chat Page" component={ChatScreen} options={{
          headerStyle: {
            backgroundColor: '#00873E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          headerRight: () => (

            <Ionicons
              name="menu-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
              onPress={() => navigation.openDrawer()} // Adjust the onPress event as per your requirement
            />
          ),
      }} />
      
      </Stack.Navigator>

      



    </View>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
