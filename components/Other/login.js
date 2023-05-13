import { Box, Button, Card, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from 'native-base';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginPage = () => {
  return (
   <View style={styles.container} >
      <Image 
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}/>

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
        <Card   style={{ width: '80%' }}  >
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl >
              <FormControl.Label>Email ID</FormControl.Label>
              <Input backgroundColor={'green.100'} borderColor={'green.300'} style={{ width: '70%' }}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" backgroundColor={'green.100'} borderColor={'green.300'} style={{ width: '70%' }}/>
              <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>
            <Button mt="2" bg='#0E9F56' fontWeight={'bold'} style={{ width: '70%' }}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Card>
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

export default LoginPage;

   
