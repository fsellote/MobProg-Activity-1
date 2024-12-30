import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GetStartedScreen() {
  const navigation = useNavigation(); 
  return (
    <ImageBackground
      source={require('../assets/getstartimg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#000',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});