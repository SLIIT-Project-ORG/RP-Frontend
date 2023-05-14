import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function ChatScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const recording = useRef(null);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const recordingOptions = {
        android: {
          extension: '.m4a',
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: '.m4a',
          outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
      };

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(recordingOptions);
      await newRecording.startAsync();
      setIsRecording(true);
      recording.current = newRecording;
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.current.stopAndUnloadAsync();
      const uri = recording.current.getURI();
      setIsRecording(false);
      setRecordedAudio(uri);
    } catch (error) {
      console.error('Failed to stop recording', error);
    }
  };

  const playRecordedAudio = async () => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync({ uri: recordedAudio });
      await soundObject.playAsync();
    } catch (error) {
      console.error('Failed to play recorded audio', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>My App</Text>
      </View>

      {/* Voice Record Option Bar */}
      <View style={styles.voiceRecordBar}>
        <TouchableOpacity
          style={styles.recordButton}
          onPress={isRecording ? stopRecording : startRecording}
        >
          <Text style={styles.recordButtonText}>{isRecording ? 'Stop' : 'Record'}</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.playButton}
          onPress={playRecordedAudio}
          disabled={!recordedAudio}
        >
          <Text style={styles.playButtonText}>Play Recorded Audio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    appBar: {
      height: 60,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    appBarText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    voiceRecordBar: {
      height: 100,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    recordButton: {
      width: 150,
      height: 50,
      backgroundColor: '#f00',
      justifyContent: 'center',
      alignItems: 'center',
    },
    recordButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    bottomBar: {
      height: 100,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    playButton: {
      width: 200,
      height: 50,
      backgroundColor: '#00f',
      justifyContent: 'center',
      alignItems: 'center',
    },
    playButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  
  












  