/**
 * React Native App for Learning React native.
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.highlight}>Hello World.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default App;
