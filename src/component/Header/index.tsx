import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  subttile: string;
  showRightButton?: boolean;
}
function Header({title, subtitle, showRightButton}: HeaderProps): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/icons/arrow_left_black.png')} />
      </TouchableOpacity>
      <View>
        <Text style={[Gs.textBlack, Gs.h1, Gs.textCenter]}>{title}</Text>
        <Text style={[Gs.textGrey, Gs.textCenter]}>{subtitle}</Text>
      </View>
      <TouchableOpacity>
        {showRightButton && (
          <Image source={require('../../../assets/icons/menu.png')} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
});
