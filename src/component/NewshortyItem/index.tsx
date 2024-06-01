import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';

interface NewshortyItemProps {
  title: string;
  address: string;
  price: string;
  image: any;
  onPress: () => void;
}

function NewshortyItem({
  title,
  address,
  price,
  image,
  onPress,
}: NewshortyItemProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageBackground} />
      <View style={styles.contentContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View>
          <Text style={[Gs.textWhite, Gs.h2]}>{title}</Text>
          <Text style={[Gs.font400, Gs.textWhite]}>{address}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require('../../../assets/icons/arrow_right_white.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
  },
  imageBackground: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    position: 'relative',
  },
  contentContainer: {
    ...Gs.cornerXL,
    ...Gs.justifyBetween,
    backgroundColor: colors.transparentBlack,
    position: 'absolute',
    width: 240,
    height: 320,
    padding: 20,
  },
  priceContainer: {
    ...Gs.cornerXL,
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignSelf: 'flex-end',
  },
  price: {
    ...Gs.textPrimary,
    ...Gs.font600,
  },
  button: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 40,
    zIndex: 2,
    bottom: 24,
    right: -20,
  },
});

export default NewshortyItem;
