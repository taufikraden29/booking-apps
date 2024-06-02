import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Booking = () => {
  return (
    <View style={styles.container}>
      <Text>Booking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Booking;
