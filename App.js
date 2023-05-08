import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './components/Other/LoginScreen';
import AppBar from './components/Other/AppBar';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
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
