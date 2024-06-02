import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Gs} from '../../../assets/styles/GlobalStyle';
import {colors} from '../../../assets/styles/Colors';
import Header from '../../component/Header';
import SliderItem from '../../component/SliderItem';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  const navigation = useNavigation();

  const slider = [
    require('../../../assets/images/item_3_a.png'),
    require('../../../assets/images/item_3_b.png'),
    require('../../../assets/images/item_3_a.png'),
  ];

  const renderSlider = () => {
    return (
      <FlatList
        data={slider}
        keyExtractor={({index}) => index}
        renderItem={({item}) => <SliderItem image={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.slideContainer}></FlatList>
    );
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View>
          <Text style={[Gs.h1, Gs.textBlack]}>Home Office</Text>
          <Text style={Gs.textGrey}>Jl RE Martadinata Tasikmalaya</Text>
        </View>
        <View style={Gs.flexRow}>
          <Image source={require('../../../assets/icons/star_yellow.png')} />
          <Text style={[Gs.textBlack, Gs.h3]}>4,5/5</Text>
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={[Gs.textBlack, Gs.h3, styles.title]}>About</Text>
        <Text style={[Gs.textGrey]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          expedita nesciunt, id illum quia numquam vitae ut error, laboriosam
          accusantium libero dolore porro assumenda, similique aspernatur
          tempora reprehenderit dolores doloremque?
        </Text>
      </View>
    );
  };

  const renderOwner = () => {
    return (
      <View style={styles.ownerContainer}>
        <Text style={[Gs.textBlack, Gs.h3, styles.title]}>Owner Shop</Text>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            source={require('../../../assets/images/profile_2.png')}
            style={styles.ownerImage}
          />
          <View>
            <View style={[Gs.flexRow]}>
              <Text>Tralalal</Text>
              <Image
                source={require('../../../assets/icons/verified_orange.png')}
                style={styles.icon}
              />
            </View>
            <Text style={[Gs.font700, Gs.textBlack]}>@Tralala</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookingButton = () => {
    return (
      <View style={styles.bookingButtonContainer}>
        <View>
          <Text style={[Gs.textPrimary, Gs.h1]}>$514</Text>
          <Text style={[Gs.textGrey]}>/Days</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Booking');
          }}>
          <Text style={[Gs.textWhite, Gs.h3]}>Booking Now</Text>
          <Image
            source={require('../../../assets/icons/arrow_right_white.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Office Details"
        subtitle="Space Available For You"
        showRightButton
      />
      <ScrollView>
        {renderSlider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {renderBookingButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  slideContainer: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    marginTop: 20,
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 10,
  },
  descriptionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  ownerContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  ownerImage: {
    marginRight: 12,
  },
  icon: {
    marginLeft: 4,
  },
  bookingButtonContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    padding: 24,
  },
  button: {
    ...Gs.flexRow,
    ...Gs.cornerMD,
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: colors.primary,
  },
});

export default Details;
