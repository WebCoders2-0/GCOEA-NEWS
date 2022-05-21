import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View style={styles.MainSerchConainer}>
        <View style={styles.searchContainer}>
        <TextInput placeholder="Email or Username" style={styles.input} />
        <TouchableOpacity>
            <Image source={require('../../assets/home.svg')} style={styles.searchImage}/>
        </TouchableOpacity>
        </View>

        <View style={styles.Categories}>
            <TouchableOpacity style={styles.CategoryName}>
                <Text>All Events</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.CategoryName}>
                <Text>Scholarship</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CategoryName}>
                <Text>Notices</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    MainSerchConainer:{
        flexDirection:'column',
    },
    searchContainer:{
        alignItems:'center',
        margin:10,
        height:50,
        borderRadius:30,
        justifyContent:'space-between',
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.35,
        shadowRadius:3.5,
        elevation:5
    },
    input:{
        width:300,
        height:50,
        fontSize:18
    },
    searchImage:{
        height:50,
        width:50,
    },
    Categories:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        margin:20,
    },
    CategoryName:{
        backgroundColor:'gray',
        padding:10,
        paddingHorizontal:20,
        borderRadius:20
    },

})

export default Search;