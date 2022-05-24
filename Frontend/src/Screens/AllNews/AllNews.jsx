import { View, Text,StyleSheet,ScrollView } from 'react-native';
import React,{useEffect,useState} from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';
import NewsCards from '../../component/NewsCards/NewsCards';
import UserCard from '../../component/UserCard/UserCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const AllNews = () => 
{
  const [news,setNews] = useState([]);

  useEffect(() =>{
    getNews();
  },[]);


  const getNews = async () =>{
    try{
      const token = await AsyncStorage.getItem('token');
      const res = await axios.get('http://10.0.2.2:8000/api/get-news/',{
        headers:{
          'Authorization':`token ${token}`,
          'Content-Type':'application/json'
        }
      });
      const data = await res.data;
      setNews(data);

    } catch(err){
      console.log(err.message);
    }
  }
  return (
    <View style={styles.AllNewsContainer}>
        <ScreenHeader />
      <Text style={styles.AllNewsHeading}>Uploaded News</Text>
      <UserCard news={news}/>
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