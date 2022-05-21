import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';
import { Link } from '@react-navigation/native';
import Search from '../../component/Search';
import NewsCards from '../../component/NewsCards/NewsCards'

const Home = () => {
  return (
    <View>
        <ScreenHeader />
        <Search />
        <Text style={styles.AllNewstitle}>All News</Text>
        <NewsCards />
    </View>
  )
}

const styles = StyleSheet.create({
  AllNewstitle:{
    marginHorizontal:15,
    fontSize:18,
    fontWeight:'700'
  }
})

export default Home;