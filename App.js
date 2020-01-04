import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"#5A95D5", fontSize:35}}>Anne</Text>
      <Text style={{color:"#5A95D5", fontSize:35}}>Melissa</Text>
      <Text style={{color:"purple", fontSize:150}}>TCC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADEABB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
