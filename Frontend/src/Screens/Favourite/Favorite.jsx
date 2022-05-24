import { View, Text,StyleSheet,ScrollView } from 'react-native';
import React,{useState,useEffect} from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';
import NewsCards from '../../component/NewsCards/NewsCards';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorite = () => 
{

  const [news,setNews] = useState({});

  useEffect(() =>{
    getFavouriteNews();
  },[]);

  const getFavouriteNews = async () =>{
    try{
      console.log('hello world')
      const token = await AsyncStorage.getItem('token');
      const res = await axios.get('http://10.0.2.2:8000/api/favourite-action/',{
        headers:{
          Authorization:`token ${token}`,
          'Content-Type':'application/json'
        }
      });

      const data = await res.data;
      setNews(data);
    } catch (err)
    {
      console.log(err);
    }
  }

  return (
    <View style={styles.FavoriteContainer}>
        <ScreenHeader />
      <Text style={styles.FavoriteHeading}>Favorite</Text>
      <NewsCards news={null} />
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