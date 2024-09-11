import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function LoginScreen() {
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation = useNavigation(); // Initialize navigation

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
        <View>
          <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        </View>
        <View style={styles.emailContainer}>
        <Text style={styles.signInText}>Sign in</Text>
        <TextInput style={styles.emailTextInput} placeholder="Enter email or username" />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordTextInput} placeholder="Password" />
        </View>
        <View style={styles.toolbarContainer}>
          <Image source={require('../assets/toolbar.png')} style={styles.toolbarImage} />
        </View>

        {/* Log In button in its own container */}
        <TouchableOpacity style={styles.loginButtonContainer} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        {/* Registration link using absolute positioning */}
        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.registerText}>Click to register account</Text>
        </TouchableOpacity>
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
    top: 55,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFBDD7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFF7ED',
    width: 380,
    height: 530,
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
    left: 47,
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
    marginTop: 410,
    marginBottom: 8,
    justifyContent: 'space-between',
    position: 'absolute',
  },
  toolbarImage: {
    width: 200,
    height: 49,
  },
  loginButtonContainer: {
    backgroundColor: '#000',
    width: 270,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
  },
  registerLink: {
    position: 'absolute', 
    bottom: 30, 
    left: 214,
    alignSelf: 'center',
    zIndex: 10, 
    marginBottom: 255,
     
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
  signInText: {
    fontFamily: 'CherryBombOne-Regular', // Inherits the same font
    fontSize: 40, // Adjust size as needed
    color: '#000', // Adjust color if needed
    position: 'absolute', // Position it within the container
    top: -60, // Adjust the vertical position
    left: 0, // Align it to the left
  },
  
});
