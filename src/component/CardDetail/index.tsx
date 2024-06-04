import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';
import {useNavigation} from '@react-navigation/native';

function CardDetail(): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image
          source={require('../../../assets/images/item_2_c.png')}
          style={styles.thumbnail}
        />
        <View>
          <Text style={[Gs.h2, Gs.textBlack]}>Indoor Work</Text>
          <View style={[Gs.flexRow, Gs.itemsCenter]}>
            <Image
              source={require('../../../assets/icons/star_yellow.png')}
              style={styles.icon}
            />
            <Text style={[Gs.h5, Gs.textBlack]}>4,5/5</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={[Gs.h4, Gs.textPrimary]}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    ...Gs.itemsCenter,
    ...Gs.cornerLG,
    paddingLeft: 10,
    paddingRight: 24,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.greyContainer,
  },
  leftContent: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
  },
  thumbnail: {
    ...Gs.cornerMD,
    width: 70,
    height: 70,
    marginRight: 12,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 4,
  },
});
