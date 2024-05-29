import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import KeyBoard from './components/KeyBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyBoard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

});
