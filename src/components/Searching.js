import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

import search from '../assets/searching.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  }
});

export default function Searching() {
  return (
    <View style={styles.container}>
      <Lottie source={search} autoPlay resizeMode='contain' autoSize loop />
    </View>
  );
}

