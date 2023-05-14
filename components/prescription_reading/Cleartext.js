import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PrescriptionDetailsPage = () => {
  return (
    <ImageBackground
      source={require('../../assets/doc.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appBar}>
      <TouchableOpacity>
          <Icon name="bars" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        {/* Add your app bar content */}
      </View>

      <View style={styles.bottomBar}>
        {/* Add your bottom bar content */}
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
        <View style={styles.cardContainer}>
          {/* Prescription details card */}
          <View style={styles.card}>
            {/* Add your prescription details here */}
            <Text style={styles.cardText}>Prescription Details</Text>
          </View>
        </View>

        <View style={styles.iconContainer}>
          {/* Download, maximize, rotation, and sound icons */}
         
         <TouchableOpacity> <Icon name="download" size={24} color="white" style={styles.icon1} /></TouchableOpacity>
         
         <TouchableOpacity><Icon name="expand" size={24} color="white" style={styles.icon1} /></TouchableOpacity> 
          <TouchableOpacity><Icon name="rotate-right" size={24} color="white" style={styles.icon1} /></TouchableOpacity>
         <TouchableOpacity><Icon name="volume-up" size={24} color="white" style={styles.icon1} /></TouchableOpacity> 
        </View>
      </View>
    </ImageBackground>
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
    resizeMode: 'center',
  },
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
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
  cardContainer: {
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    height:350,
    width:300,
    borderColor:'black'

  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:'center'

  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon1: {
    marginHorizontal: 10,
    backgroundColor:'orange',
    padding:10,
    borderColor:'white',
    borderRadius:10
  },
  icon: {
    marginHorizontal: 10,
  
    borderColor:'white',
 
  },
});

export default PrescriptionDetailsPage;
