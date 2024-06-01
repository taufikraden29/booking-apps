import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../assets/styles/Colors';
import {Gs} from '../../../assets/styles/GlobalStyle';
import InputText from '../../component';

const Home = () => {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/profile_1.png')}
            style={styles.profileContainer}
          />
          <View>
            <Text style={Gs.textBlack}>Hi, Raden</Text>
            <Text style={(Gs.font700, Gs.textBlack)}>@dbraden</Text>
          </View>
        </View>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/icons/gift.png')}
            style={styles.iconContainer}
          />
          <Image
            source={require('../../../assets/icons/notification.png')}
            style={styles.iconContainer}
          />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.sectionContainer}>
        <InputText
          icon={require('../../../assets/icons/location.png')}
          placeholder="Cari Bookinganmu"></InputText>
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, Gs.h1]}>Popular</Text>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/item_1_a.png')}
            style={styles.popularMainImages}
          />
          <View>
            <Image
              source={require('../../../assets/images/item_1_b.png')}
              style={styles.popularImages}
            />
            <Image
              source={require('../../../assets/images/item_1_c.png')}
              style={styles.popularImages}
            />
          </View>
        </View>
        <View>
          <View>
            <Text>IndoWork</Text>
            <Text>Jl Entis Sutisna Bandung</Text>
          </View>
          <View>
            <Text>Harga</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderSearch()}
      <ScrollView>
        {renderPopularSection()}
        {/* {renderNewsworthy()} */}
      </ScrollView>
      {/* <BottomNav /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  headerContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  sectionContainer: {
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  popularMainImages: {
    ...Gs.cornerXL,
    flex: 1,
    height: 200,
    marginRight: 10,
  },
  popularImages: {
    ...Gs.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  sectionTitle: {
    ...Gs.textBlack,
    marginBottom: 16,
  },
});

export default Home;
