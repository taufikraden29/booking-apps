import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import {colors} from '../../../assets/styles/Colors';
import CardDetail from '../../component/CardDetail';
import {Gs} from '../../../assets/styles/GlobalStyle';

const Booking = () => {
  const renderBookingDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Booking" subtitle="Space Available Today" />
      <View>
        <ScrollView>
          {renderBookingDetail()}
          {/* {renderBookingInformation()} */}
        </ScrollView>
      </View>
      {/* {renderProcesedPayment()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    ...Gs.h3,
    ...Gs.textBlack,
    marginBottom: 12,
  },
});

export default Booking;
