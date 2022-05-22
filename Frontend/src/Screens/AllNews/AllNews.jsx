import { View, Text,StyleSheet,ScrollView } from 'react-native';
import React from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';
import NewsCards from '../../component/NewsCards/NewsCards';
import UserCard from '../../component/UserCard/UserCard'

const AllNews = () => {
  return (
    <View style={styles.AllNewsContainer}>
        <ScreenHeader />
      <Text style={styles.AllNewsHeading}>Uploaded News</Text>
      <UserCard />
    </View>
  )
}

const styles = StyleSheet.create({
    AllNewsContainer:{
        justifyContent:'center',
    },
    AllNewsHeading:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'700',
        textDecorationLine:'underline',
        margin:10
    }
})

export default AllNews;