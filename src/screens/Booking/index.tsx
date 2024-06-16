import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import {colors} from '../../../assets/styles/Colors';
import CardDetail from '../../component/CardDetail';
import {Gs} from '../../../assets/styles/GlobalStyle';
import InputText from '../../component/InputText';
import {useNavigation} from '@react-navigation/native';

const Booking = () => {
  const navigation = useNavigation();

  const forms = [
    {
      label: 'Total Days',
      placeholder: 'Total Days',
      icon: require('../../../assets/icons/days.png'),
    },
    {
      label: 'Date start at',
      placeholder: 'Date start at',
      icon: require('../../../assets/icons/calendar.png'),
    },
    {
      label: 'Complete name',
      placeholder: 'Complete name',
      icon: require('../../../assets/icons/user.png'),
    },
    {
      label: 'Phone number',
      placeholder: 'Phone number',
      icon: require('../../../assets/icons/phone.png'),
    },
  ];

  const renderBookingDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderBookingInformation = () => {
    return (
      <View style={styles.section}>
        <Text style={[Gs.h3, Gs.textBlack]}>Boking Information</Text>
        <Text style={[Gs.textGrey]}>
          Lorem ipsum dolor sit amet consectetur adipisicing
        </Text>
        {forms.map((val, idx) => {
          return (
            <InputText
              key={idx}
              label={val.label}
              placeholder={val.placeholder}
              icon={val.icon}></InputText>
          );
        })}
      </View>
    );
  };

  const renderProcesedPayment = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Checkout')}>
          <Text style={[Gs.h4, Gs.textWhite]}>Proceess Payment</Text>
          <Image
            source={require('../../../assets/icons/arrow_right_white.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.termConditionButton}>
          <Text>Read Terms & All Conditions</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Booking" subtitle="Space Available Today" />
      <View>
        <ScrollView>
          {renderBookingDetail()}
          {renderBookingInformation()}
        </ScrollView>
      </View>
      {renderProcesedPayment()}
    </View>
  );
};

const styles = StyleSheet.create({
  termConditionButton: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    padding: 14,
  },
  proceedButton: {
    ...Gs.flexRow,
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
  icon: {marginLeft: 4},
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
