import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src';

export default () => {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
