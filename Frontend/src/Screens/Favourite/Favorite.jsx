import { View, Text,StyleSheet,ScrollView } from 'react-native';
import React from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';
import NewsCards from '../../component/NewsCards/NewsCards';

const Favorite = () => {
  return (
    <View style={styles.FavoriteContainer}>
        <ScreenHeader />
      <Text style={styles.FavoriteHeading}>Favorite</Text>
      <NewsCards />
    </View>
  )
}

const styles = StyleSheet.create({
    FavoriteContainer:{
        justifyContent:'center',
    },
    FavoriteHeading:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'700',
        textDecorationLine:'underline',
        margin:10
    }
})

export default Favorite;