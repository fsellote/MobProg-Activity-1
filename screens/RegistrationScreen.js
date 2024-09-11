import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function RegistrationScreen() {
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const navigation = useNavigation(); // Initialize navigation

  const handleSignupPress = () => {
    console.log('Sign Up button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register{'\n'}Now!</Text>

      <View style={styles.innerContainer}>
        {/* Arrow for going back to Log In */}
        <TouchableOpacity style={styles.goBackArrow} onPress={() => navigation.navigate('Login')}>
          {/* Simple text-based arrow, you can replace it with an image or an icon */}
          <Text style={styles.arrowLabel}> {'<'} Go back to Log In</Text>
        </TouchableOpacity>

        <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        <View style={styles.emailContainer}>
        <Text style={styles.signUpText}>Sign Up</Text>
          <TextInput style={styles.emailTextInput} placeholder="Enter email or username" />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordTextInput} placeholder="Password" />
        </View>
        <View style={styles.confirmPasswordContainer}>
          <TextInput style={styles.confirmPasswordTextInput} placeholder="Confirm Password" />
        </View>

        {/* Checkbox for agreeing to the Terms of Use */}
        <CheckBox
          title="I agree to the Terms of Use"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.signupButtonContainer, !isChecked && styles.disabledButton]}
          onPress={handleSignupPress}
          disabled={!isChecked}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>
      </View>

      {/* Toolbar positioned at the bottom */}
      <View style={styles.toolbarContainer}>
        <Image source={require('../assets/toolbar.png')} style={styles.toolbarImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color: '#333',
    fontFamily: 'CherryBombOne-Regular',
    textAlign: 'center', // Center the text horizontally
    position: 'absolute',
    top: 43,
    width: '100%', // Takes full width for centering
    lineHeight: 80, // Adjust line height to properly space between lines
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
  goBackArrow: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row', // For horizontal layout
    alignItems: 'center', // Vertically center content
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
    position: 'absolute', // Fix it at the bottom
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
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
    backgroundColor: 'transparent', // Removes the background color
    borderWidth: 0, // Removes border for the container as well
    marginTop: 9,
    bottom: -12,
    left: -0,
  },
  checkboxText: {
    fontSize: 13,
    color: '#000', // Optional: You can adjust text style here
  },
  signUpText: {
    fontFamily: 'CherryBombOne-Regular', // Inherits the same font
    fontSize: 40, // Adjust size as needed
    color: '#000', // Adjust color if needed
    position: 'absolute', // Position it within the container
    top: -60, // Adjust the vertical position
    left: 0, // Align it to the left
  },
});
