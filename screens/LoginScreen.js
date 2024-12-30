import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { createClient } from '@supabase/supabase-js';
import { Ionicons } from '@expo/vector-icons'; 

const SUPABASE_URL = 'https://gbdrykkxplgankyrwnat.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZHJ5a2t4cGxnYW5reXJ3bmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NzIzNjgsImV4cCI6MjA1MTE0ODM2OH0.FsiVnpQs0oOHc6i6vwda4pwe-ZQC50hJTldJf-YD-TE';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function LoginScreen() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const navigation = useNavigation();

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

  const handleLoginPress = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      console.log('Login successful:', data);
      alert('Login successful!');
      navigation.navigate('GetStarted');
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Login failed: ' + error.message);
    }
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
          <TextInput
            style={styles.emailTextInput}
            placeholder="Enter email or username"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordTextInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.toolbarContainer}>
          <Image source={require('../assets/toolbar.png')} style={styles.toolbarImage} />
        </View>

        <TouchableOpacity style={styles.loginButtonContainer} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

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
    width: 385,
    height: 580,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: -50,
    padding: 20,
  },
  logoImage: {
    marginBottom: 10,
    bottom: 115,
    left: 50,
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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 20,
  },
  passwordTextInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  toolbarContainer: {
    marginTop: 420,
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
    bottom: 60,
    left: 214,
    zIndex: 10,
    marginBottom: 255,
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
  signInText: {
    fontFamily: 'CherryBombOne-Regular',
    fontSize: 40,
    color: '#000',
    position: 'absolute',
    top: -60,
  },
  
});
