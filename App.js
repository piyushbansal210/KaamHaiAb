import { StatusBar as SB } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';
import { useFonts } from 'expo-font';

import Define from './source/components/Define'
import Home from './source/screens/Home'
import AboutUs from './source/screens/AboutUs';
import Blog from './source/screens/Blog';

export default function App() {

  const [loaded]=useFonts({
    Black:require('./source/assets/fonts/AlternateGothicATF-Black.otf'),
    Bold:require('./source/assets/fonts/AlternateGothicATF-Bold.otf'),
    Demi:require('./source/assets/fonts/AlternateGothicATF-Demi.otf'),
    Heavy:require('./source/assets/fonts/AlternateGothicATF-Heavy.otf'),
    Light:require('./source/assets/fonts/AlternateGothicATF-Light.otf'),
    Medium:require('./source/assets/fonts/AlternateGothicATF-Medium.otf'),
    SemiLight:require('./source/assets/fonts/AlternateGothicATF-Semilight.otf'),
    Thin:require('./source/assets/fonts/AlternateGothicATF-Thin.otf'),
    Regular:require('./source/assets/fonts/AlternateGothicATF.otf'),
  })

  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <Blog/>
      <SB style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Platform.OS === 'ios' ? 0 : StatusBar.currentHeight+10
  },
});
