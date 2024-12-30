import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gbdrykkxplgankyrwnat.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZHJ5a2t4cGxnYW5reXJ3bmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NzIzNjgsImV4cCI6MjA1MTE0ODM2OH0.FsiVnpQs0oOHc6i6vwda4pwe-ZQC50hJTldJf-YD-TE'; // Replace with your Supabase anon key
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const handleSignupPress = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!isChecked) {
      alert('Please agree to the Terms of Use');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: null, 
        },
      });

      if (error) throw error;
      alert('Registration successful! You can now log in.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration error:', error.message);
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register{'\n'}Now!</Text>

      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.goBackArrow} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.arrowLabel}>{'<'} Go back to Log In</Text>
        </TouchableOpacity>

        <View style={styles.toolbarContainer}>
          <Image source={require('../assets/toolbar.png')} style={styles.toolbarImage} />
        </View>

        <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        <View style={styles.emailContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
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
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.confirmPasswordContainer}>
          <TextInput
            style={styles.confirmPasswordTextInput}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <CheckBox
          title="I agree to the Terms of Use"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />

        <TouchableOpacity
          style={[styles.signupButtonContainer, !isChecked && styles.disabledButton]}
          onPress={handleSignupPress}
          disabled={!isChecked}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: '#333',
    fontFamily: 'CherryBombOne-Regular',
    textAlign: 'center',
    position: 'absolute',
    top: 43,
    width: '100%',
    lineHeight: 80,
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
    height: 510,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },
  goBackArrow: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 320,
  },
  arrowLabel: {
    fontSize: 13,
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 217,
  },
  logoImage: {
    bottom: 115,
    width: 190,
    height: 190,
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
  confirmPasswordContainer: {
    width: 290,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 20,
  },
  confirmPasswordTextInput: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  toolbarContainer: {
    flexDirection: 'row',
    marginTop: 440,
    marginBottom: 8,
    justifyContent: 'space-between',
    position: 'absolute',
  },
  toolbarImage: {
    width: 200,
    height: 49,
  },
  signupButtonContainer: {
    backgroundColor: '#000',
    width: 270,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#999',
  },
  signupButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginTop: -5,
    fontSize: 16,
    color: '#000',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginTop: 9,
    bottom: -12,
    left: -0,
  },
  checkboxText: {
    fontSize: 13,
    color: '#000',
  },
  signUpText: {
    fontFamily: 'CherryBombOne-Regular',
    fontSize: 40,
    color: '#000',
    position: 'absolute',
    top: -60,
    left: 0,
  },
});
