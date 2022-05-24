import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image, ScrollView } from 'react-native';
import React,{useEffect,useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Search = ({updateNews}) => {

    const [getInput,setGetInput] = useState('');


    const getSerachResult = async (search_data,type) =>
    {
        try{
            const token = await AsyncStorage.getItem('token');
            uri = type === 'Search' ? `http://10.0.2.2:8000/api/filter-news/?search=${search_data}`: `http://10.0.2.2:8000/api/filter-news/?category=${search_data}`
            console.log(uri);
            const res = await axios.get(uri,{
                headers:{
                    'Authorization':`token ${token}`,
                    'Content-Type':'application/json'
                }
            });
            const data = await res.data;
            updateNews(data);
        } catch (err)
        {
            console.log(err);
        }
    }



  return (
    <View style={styles.MainSerchConainer}>
        <View style={styles.searchContainer}>
        <TextInput placeholder="Email or Username" style={styles.input} onChangeText={(value) => setGetInput(value)} value={getInput}
        onKeyPress={() => getSerachResult(getInput,'Search')} />
        <TouchableOpacity style={styles.searchIcon}>
            <Icon name="search" size={25} color="#3A1347" />
        </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} style={styles.Categories}>
            <TouchableOpacity style={[styles.CategoryName,{marginLeft:3}]} onPress={() => getSerachResult('all','Search')}>
                <Text>All News</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.CategoryName} onPress={() => getSerachResult('Event','category')}>
                <Text>All Events</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.CategoryName} onPress={() => getSerachResult('Scholarship','category')}>
                <Text>Scholarship</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CategoryName} onPress={() => getSerachResult('Notice','category')}>
                <Text>Notices</Text>
            </TouchableOpacity>

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    MainSerchConainer:{
        flexDirection:'column',
    },
    searchContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
        height:50,
        borderRadius:30,
        shadowColor:'#E4E4E4',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.35,
        shadowRadius:2.5,
        elevation:5
    },
    input:{
        width:200,
        paddingLeft:20,
        height:50,
        fontSize:18
    },
    searchIcon:{
        marginRight:20,
    },
    Categories:{
        flexDirection:'row',
        marginTop:10,
        margin:20,
        padding:10,
    },
    CategoryName:{
        backgroundColor:'#E4E4E4',
        padding:10,
        margin:10,
        paddingHorizontal:20,
        borderRadius:20,
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.35,
        shadowRadius:3.5,
        elevation:5
    },


})

export default Search;