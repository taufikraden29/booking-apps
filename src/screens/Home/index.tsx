import {
  FlatList,
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
import InputText from '../../component/InputText';
import NewshortyItem from '../../component/NewshortyItem';
import BottomNav from '../../component/BottomNav';

const Home = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details');
  };

  const newshortyData = [
    {
      title: 'Tempat Nyaman',
      address: 'Bandung',
      price: '$212/days',
      image: require('../../../assets/images/item_2_a.png'),
    },
    {
      title: 'Rumah Nenek',
      address: 'Jakarta',
      price: '$212/days',
      image: require('../../../assets/images/item_2_b.png'),
    },
    {
      title: 'Ningrum',
      address: 'Tangerang',
      price: '$212/days',
      image: require('../../../assets/images/item_2_c.png'),
    },
  ];

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/profile_1.png')}
            style={styles.profileContainer}
          />
          <View>
            <Text style={Gs.textBlack}>Hi, Cumi</Text>
            <Text style={(Gs.font700, Gs.textBlack)}>@cumitralalala</Text>
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
        <View style={styles.popularContent}>
          <View>
            <Text style={[Gs.h2, Gs.textBlack]}>IndoWork</Text>
            <Text style={[Gs.textGrey]}>Jl Entis Sutisna Bandung</Text>
          </View>
          <View style={styles.popularPriceContainer}>
            <Text style={styles.popularPriceLabel}>$ 250,00</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderNewsworthy = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, Gs.h1]}>New Shorty</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newshortyData}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <NewshortyItem
              title={item.title}
              address={item.address}
              price={item.price}
              image={item.image}
              onPress={() => {
                handlePress;
              }}
            />
          )}></FlatList>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderHeader()}
        {renderSearch()}
        <ScrollView style={styles.scrollContainer}>
          {renderPopularSection()}
          {renderNewsworthy()}
        </ScrollView>
      </View>
      <BottomNav />
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
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
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
  popularContent: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  popularPriceContainer: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  popularPriceLabel: {
    ...Gs.font600,
    ...Gs.textPrimary,
  },
  scrollContainer: {
    height: '100%',
  },
});

export default Home;
