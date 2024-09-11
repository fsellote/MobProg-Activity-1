import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    'CherryBombOne-Regular': require('../assets/fonts/CherryBombOne-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const handleLoginPress = () => {
    console.log('Login button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>

      <View style={styles.innerContainer}>
        <View style={styles.signintext}>
          <Text>Sign In</Text>
        </View>
        <View>
          <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        </View>
        <View style={styles.emailContainer}>
          <TextInput style={styles.emailTextInput} placeholder="Enter email or username" />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordTextInput} placeholder="Password" />
        </View>
        <View style={styles.toolbarContainer}>
          <Image source={require('../assets/toolbar.png')} style={styles.toolbarImage} />
        </View>
        <TouchableOpacity style={styles.loginButtonContainer} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity> 

        <Text style={styles.orText}>Or</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 90,
    color: '#333',
    marginBottom: 400,
    fontFamily: 'CherryBombOne-Regular',
    position: 'absolute', 
    top: 100, 
  },
  signintext: {
    fontSize: 30, // Adjust font size as needed
    color: '#333',
    fontFamily: 'CherryBombOne-Regular',  // Ensure correct font family is set
    position: 'absolute', 
    top: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFBDD7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFF7ED',
    width: 360,
    height: 480,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    position: 'absolute',
    bottom: 0,
    padding: 20, 
  },
  logoImage: {
    bottom: 115,
    left: 40,
    width: 190,
    height: 190,
    transform: [{ translateX: -45 }],
  },
  emailContainer: {
    width: 290,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: -70,
  },
  emailTextInput: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  passwordContainer: {
    width: 290,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 20,
  },
  passwordTextInput: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  toolbarContainer: {
    flexDirection: 'row', 
    marginTop: 20,
    marginBottom: 20, 
    justifyContent: 'space-between', 
  },
  toolbarImage: {
    width: 200,
    height: 50,
  },
  loginButtonContainer: {
    backgroundColor: '#000',
    width: 270,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});