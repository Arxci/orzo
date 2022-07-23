import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './src/Components/header/Header';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'rgb(166, 166, 166)',
  },
});
