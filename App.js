import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, StyleSheet, View } from 'react-native';

import AuthScreen from './screens/AuthScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.webOuterBackground}>
      <View style={styles.mobileAppContainer}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="MainTabs" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  webOuterBackground: {
    flex: 1,
    backgroundColor: '#0F172A', // Warna latar belakang gelap (Slate Modern) di luar frame
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileAppContainer: {
    width: '100%',
    maxWidth: 450, // Membatasi lebar agar pas seperti layar HP
    height: '100%',
    maxHeight: Platform.OS === 'web' ? '92vh' : '100%', // Tinggi presisi seperti perangkat mobile
    backgroundColor: '#FFFFFF',
    borderRadius: Platform.OS === 'web' ? 20 : 0, // Sudut melengkung halus
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 25,
    elevation: 12,
  },
});