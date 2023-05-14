
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { VStack, Input, Button, IconButton,  Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";


const HomePage = () => {
  return (
    <View style={styles.container} >
      <Image 
        source={require('../../assets/back.jpg')}
        style={styles.backgroundImage}
       
      />

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
        {/* Your bottom bar content goes here */}
      </View>
   <NativeBaseProvider>
    <Center flex={1}>
   <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
    
        <Input borderColor={'white'} backgroundColor={'green.200'} placeholder="Search" variant="filled" width="100%" boarderWidth='2' borderRadius="10" py="3" px="2" InputLeftElement={ <Icon name="search" size={20} color="black" style={styles.icon} />} />
      </VStack>
      </VStack>
      </Center>
   </NativeBaseProvider>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  

  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,    right: 0,
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

export default HomePage;

   
