import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../Other/Footer';

const ImageUpload = ({navigation}) => {

  const handleGetStarted = () => {
    navigation.navigate('Prescription identify Page');
  };
  const [isCameraVisible, setCameraVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleCameraPress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setCameraVisible(true);
    } else {
      Alert.alert('Permission Denied', 'Camera permission is required to take a photo.');
    }
  };

  const handleGalleryPress = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
        setCameraVisible(false);
      }
    } else {
      Alert.alert('Permission Denied', 'Media library permission is required to access photos.');
    }
  };

  const handleConfirmPress = () => {
    // Handle the confirmation action here
  };

  const handleCancelPress = () => {
    setSelectedImage(null);
    setCameraVisible(false);
  };

  const handleRotatePress = () => {
    setRotationAngle((prevAngle) => (prevAngle + 90) % 360);
  };

  return (

    <ImageBackground
      source={require('../../assets/background.jpg')} // Replace with the actual image path
      style={styles.backgroundImage}>
     
     <View><Image
       source={require('../../assets/doc.jpg')}
          style={styles.image}
        /></View>
        <View><Text style={styles.text2}>Prescription Reading</Text></View>
     
      <View style={styles.container}>
     
        {!isCameraVisible && !selectedImage && (
          <TouchableOpacity onPress={handleCameraPress} style={styles.cameraIconContainer}>

            <AntDesign name="camera" size={100} color="black" borderColor='white'  />
          </TouchableOpacity>

        )}

        {isCameraVisible && (
          <Modal animationType="slide" transparent={true} visible={isCameraVisible}>
            <View style={styles.popupContainer}>
              <View style={styles.popupContent}>
                <Text style={styles.text}>Upload Image</Text>
                <Text style={styles.text1}>Choose a Prescription</Text>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: '#1CA369' }]}
                  onPress={handleCameraPress}
                >
                  <Text style={styles.buttonText}>Take a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: '#1CA369' }]}
                  onPress={handleGalleryPress}
                >
                  <Text style={styles.buttonText}>Choose from gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: 'orange' }]}
                  onPress={handleCancelPress}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}

        {selectedImage && (
          <View style={styles.selectedImageContainer}>
            <Image
              source={{ uri: selectedImage }}
              style={[styles.selectedImage, { transform: [{ rotate: `${rotationAngle}deg` }] }]} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={handleCancelPress}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rotateIconContainer} onPress={handleRotatePress}>
                <Icon name="download" size={20} color="#fff" style={{ transform: [{ rotatename: `${rotationAngle}deg` }] }} />

              </TouchableOpacity>


              <TouchableOpacity style={[styles.button, { backgroundColor: '#1CA369' }]} onPress={handleGetStarted}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>

            </View>
          </View>
          
        )}
      
      </View>
      <View><Footer></Footer></View>
      </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems:'center'
    
   

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center'

  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 60,
    marginTop:20
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'flex-end',



  },
  popupContent: {
    backgroundColor: 'lightgray',
    padding: 20,
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 250,
    borderColor: 'black'

  },
  button: {
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,


  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text1: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text2: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
   alignItems:'center',
   marginLeft:40
  },
  selectedImageContainer: {

    justifyContent: 'flex-start',


  },
  selectedImage: {
    width: 250,
    height: 250,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2,


    resizeMode: 'center',


  },
  buttonContainer: {
    flexDirection: 'row',


    justifyContent: 'space-around',

  },
  rotateIconContainer: {
    backgroundColor: '#C43D56',
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    width: 40,
    height: 40,
  },
  image: {
    width: 250,
    height: 150,
    marginLeft:50,
    marginRight:100,
    marginTop:20,
    borderRadius:70,
    marginBottom:30,
    borderColor:'white'
   
  },
});

export default ImageUpload;

