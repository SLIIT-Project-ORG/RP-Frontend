import React from 'react';
import { StyleSheet, View } from 'react-native';


import GetStartedPage from './components/Other/GetStart';
import ImageUpload from './components/prescription_reading/ImageUpload';
import WhiteCardPage from './components/prescription_reading/Cleartext';


const App = () => {
  return (
    
    <View style={styles.container}>
        
      <WhiteCardPage/>
      
    
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
