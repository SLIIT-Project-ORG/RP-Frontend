import React from 'react';
import { StyleSheet, View } from 'react-native';


import GetStartedPage from './components/Other/GetStart';
import ImageUpload from './components/prescription_reading/ImageUpload';
import WhiteCardPage from './components/prescription_reading/Cleartext';
import VoicePage from './components/Disease_Recognition/VoiceInput';
import VoiceChatScreen from './components/Disease_Recognition/ChatScreen';
import ChatScreen from './components/Disease_Recognition/ChatScreen';


const App = () => {
  return (
    
    <View style={styles.container}>
        
      <ChatScreen/>
      
    
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
