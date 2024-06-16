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
import CardDetail from '../../component/CardDetail';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';
import {useNavigation} from '@react-navigation/native';

function Checkout(): JSX.Element {
  const navigation = useNavigation();

  const checkoutData = [
    {
      label: 'Price Per Day',
      value: '$500',
      isBold: true,
    },
    {
      label: 'Total Days',
      value: '18 Days',
      isBold: false,
    },
    {
      label: 'Date',
      value: '22 Mei 2024',
      isBold: false,
    },
    {
      label: 'End',
      value: '25 Mei 2024',
      isBold: false,
    },
    {
      label: 'Tax 15%',
      value: '$890',
      isBold: true,
    },
    {
      label: 'Insurance',
      value: '$20,000',
      isBold: true,
    },
    {
      label: 'Grand Total',
      value: '$2,890,090',
      isBold: true,
      isPrimary: true,
    },
  ];

  const borderBottom = {
    borderBottomWidth: 1,
    borderColor: colors.greyContainer,
  };

  const renderCheckoutDetail = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Space</Text>
        <CardDetail />
      </View>
    );
  };

  const renderCheckoutData = () => {
    return (
      <View style={styles.section}>
        {checkoutData.map((val, idx) => {
          const isLast = idx === checkoutData?.length - 1;
          return (
            <View
              key={idx}
              style={[styles.checkoutItem, !isLast && borderBottom]}>
              <Text style={[Gs.textBlack]}>{val.label}</Text>
              <Text
                style={[
                  Gs.textBlack,
                  val.isBold && Gs.font700,
                  val.isPrimary && Gs.textPrimary,
                ]}>
                {val.value}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <View style={styles.section}>
        <Text style={[styles.sectionTitle]}>Payment</Text>
        <View style={styles.paymentContainer}>
          <TouchableOpacity style={styles.paymentButton}>
            <Image source={require('../../../assets/icons/wallet.png')} />
            <Text style={[Gs.h5, Gs.textBlack]}>My Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton}>
            <Image source={require('../../../assets/icons/mastercard.png')} />
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderPayNow = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Success')}>
          <Text style={[Gs.textWhite, Gs.h4]}>Pay Now</Text>
          <Image
            source={require('../../../assets/icons/payment.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Checkout" subtitle="Ready To Start Working" />
      <View style={styles.content}>
        <ScrollView>
          {renderCheckoutDetail()}
          {renderCheckoutData()}
          {renderPaymentMethod()}
        </ScrollView>
        {renderPayNow()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 14,
  },
  content: {
    flex: 1,
    ...Gs.justifyBetween,
  },
  proceedButton: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
  checkoutItem: {
    ...Gs.justifyBetween,
    ...Gs.flexRow,
    paddingVertical: 14,
  },
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
  paymentContainer: {
    ...Gs.flexRow,
    marginHorizontal: -10,
    marginBottom: 30,
  },
  paymentButton: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerLG,
    paddingVertical: 24,
    paddingHorizontal: 52,
    borderColor: colors.greyContainer,
    borderWidth: 1,
    marginHorizontal: 14,
  },
});

export default Checkout;
