import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import React,{useEffect,useState} from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';
import { Link } from '@react-navigation/native';
import Search from '../../component/Search/Search';
import NewsCards from '../../component/NewsCards/NewsCards';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import { AuthContext } from '../../component/context';

const Home = () => 
{
  const [user,setUser] = useState([]); 
  const [news,setNews] = useState([]);

  const {getAllNews} = React.useContext(AuthContext);


  useEffect(() =>{
    getAllNews();
    getUserDetials();
  },[]);
  
  const getUserDetials = async () =>{
    try {
      let value = await AsyncStorage.getItem('user');
      value = JSON.parse(value)
      getAllNews(value.user_type);
      setUser(value);
      const newsDetials = await AsyncStorage.getItem('news');
      setNews(JSON.parse(newsDetials));
    } catch(e) {
      console.log(e.message);
    }
  }

  const updateNews = (getnews) =>{
    try{
      setNews(getnews);

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <View>
        <ScreenHeader />
        <Search updateNews={updateNews}/>
        <Text style={styles.AllNewstitle}>All News</Text>
        <NewsCards news={news} />
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