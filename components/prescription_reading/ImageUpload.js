import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageUpload = () => {
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
      source={require('../../assets/doc.jpg')} // Replace with the actual image path
      style={styles.backgroundImage}>
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Icon name="bars" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        {/* Your app bar content goes here */}
      </View>

      <View style={styles.bottomBar}>

        <TouchableOpacity>
          <Icon name="home" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>

        {!isCameraVisible && !selectedImage && (
          <TouchableOpacity onPress={handleCameraPress} style={styles.cameraIconContainer}>

            <AntDesign name="camera" size={100} color="black" borderColor='white' />
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





              <TouchableOpacity style={[styles.button, { backgroundColor: '#1CA369' }]} onPress={handleConfirmPress}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>

            </View>
          </View>
        )}
      </View></ImageBackground>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center'

  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 90,
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
  selectedImageContainer: {

    justifyContent: 'flex-start',


  },
  selectedImage: {
    width: 300,
    height: 300,
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
    backgroundColor: 'blue',
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
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0, right: 0,
    height: 60,
    backgroundColor: '#0E9F56',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#0E9F56',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default ImageUpload;

