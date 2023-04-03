import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import cars  from './cars'
import CarItem from '../CarItem';
import stylesList from './stylesList';

export const CarsList = (props) => {



  return (
    <View style={stylesList.container}>
        <FlatList 
            data={cars}
            rendeItem={({item}) => <CarItem car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
        />
    </View>
  )
}
