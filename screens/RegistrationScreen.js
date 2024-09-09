import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Import CheckBox from react-native-elements

export default function RegistrationScreen() {
  const [isChecked, setIsChecked] = useState(false); // State for checkbox

  let [fontsLoaded] = useFonts({
    'CherryBombOne-Regular': require('../assets/fonts/CherryBombOne-Regular.ttf'),
  });

  const handleSignupPress = () => {
    console.log('Sign Up button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>

      <View style={styles.innerContainer}>
        
        <View>
          <Image source={require('../assets/logo.png')} style={styles.logoImage} />
        </View>
        <View style={styles.emailContainer}>
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
          containerStyle={styles.checkboxContainer} // Make the background transparent
          textStyle={styles.checkboxText} // Additional styling for text if needed
        />

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.signupButtonContainer, !isChecked && styles.disabledButton]}
          onPress={handleSignupPress}
          disabled={!isChecked} // Disable sign-up if the checkbox isn't checked
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>
      </View>

      <View style={styles.toolbarContainer}>
        <Image source={require('../assets/toolbar.png')} style={styles.toolbarImage} />
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
    marginTop: -100,
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
    marginTop: 780,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  toolbarImage: {
    width: 200,
    height: 50,
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
    marginTop: -10,
    fontSize: 16,
    color: '#000',
  },
  checkboxContainer: {
    backgroundColor: 'transparent', // Removes the background color
    borderWidth: 0, // Removes border for the container as well
    marginTop: 10,
    marginLeft:-85,
  },
  checkboxText: {
    color: '#808080', // Optional: You can adjust text style here
  },
});
