import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';

const GetStartedPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/get.jpg')}
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0CB96E',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStartedPage;

