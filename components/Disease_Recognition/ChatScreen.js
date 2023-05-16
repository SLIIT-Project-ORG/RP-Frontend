import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView ,Card } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';
import Footer from '../Other/Footer';

const ChatScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUri, setAudioUri] = useState(null);
  const [audioPlayer, setAudioPlayer] = useState(null);

  const startRecording = async () => {
    try {
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setIsRecording(true);
      setAudioPlayer(recording);
    } catch (error) {
      console.log('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      await audioPlayer.stopAndUnloadAsync();
      const uri = audioPlayer.getURI();
      setIsRecording(false);
      setAudioUri(uri);
    } catch (error) {
      console.log('Error stopping recording:', error);
    }
  };

  const playAudio = async () => {
    try {
      const sound = new Audio.Sound();
      await sound.loadAsync({ uri: audioUri });
      await sound.playAsync();
    } catch (error) {
      console.log('Error playing audio:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.backgroundImage}
    >
     
      

      <ScrollView contentContainerStyle={styles.container}>
        {/* Display the chat messages here */}
        {audioUri && (
          <TouchableOpacity onPress={playAudio} style={styles.audioMessage}>
            <Icon name="play" size={20} color="#000" style={styles.icon} />
            <Text style={styles.cardText}>   Voice Message  </Text>
            
          </TouchableOpacity>
        )}
        <View style={styles.card}><Text style={styles.text} ></Text></View>
      </ScrollView>

      {/* Voice chat interface */}
      <View style={styles.voiceChat}>
        {isRecording ? (
          <TouchableOpacity onPress={stopRecording} style={styles.recordButton}>
            <Icon name="stop" size={30} color="black" style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={startRecording} style={styles.recordButton}>
            <Icon name="microphone" size={30} color="white" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      <View><Footer></Footer></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:    'center',
    justifyContent: 'center',
    color:'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center',
  },
  card:{

    height:100,
    width:'70%',
    backgroundColor:'white',
    borderColor:'lightblue',
    borderRadius:10,
    borderWidth:2
  },
  
  cardText: {
    fontSize: 16,
    fontWeight: 'semibold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    height: 40,
   
  },
  text:{
    color:'black',
    justifyContent:'center',
    fontSize:15,
    fontWeight:'semibold',
    alignItems:'center'
  },

  audioMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height:30,
    backgroundColor:'lightgreen',
    padding:30,
    borderColor:'black',
    width:'70%',
    borderRadius:10,
    justifyContent: 'space-between',
    
  },
  voiceChat: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    height: 60,
   
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  recordButton: {
    backgroundColor: '#C43D56',
    borderRadius: 30,
    padding: 20,
    marginTop:10,
    
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
    justifyContent:'space-between'
  },
});

export default ChatScreen;

