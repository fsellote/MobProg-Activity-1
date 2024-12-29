import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import DashboardPage from './screens/DashboardPage';
import GetStartedPage from './screens/GetStartedPage';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator  
  screenOptions={{ 
    headerShown: false,}}>
    
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Registration' component={RegistrationScreen} />
    <Stack.Screen name="GetStarted" component={GetStartedPage} />
    <Stack.Screen name='Dashboard' component={DashboardPage} />

  </Stack.Navigator>
 </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 400,
    fontFamily: 'Poppins-Black',}
});
