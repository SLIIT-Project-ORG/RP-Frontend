
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity ,Image} from 'react-native';
import Footer from '../Other/Footer';

const VoicePage = ({navigation}) => {

  const handleGetStarted = () => {
    navigation.navigate('Chat Page');
  };

  return (
    <View style={styles.container}>
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View><Image
        source={require('../../assets/sound.png')}
        style={styles.image}
      /></View>

      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}  >Voice Chat With Us</Text>
      </TouchableOpacity>
    </ImageBackground>
    <View><Footer></Footer></View>
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
image: {
  width: 250,
  height: 250,
  borderRadius: 130,
  marginBottom: 10,
  borderColor:'green',
  borderWidth:1
},
});
export default VoicePage;
