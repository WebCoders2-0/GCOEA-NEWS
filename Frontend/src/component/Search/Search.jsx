import { View, Text,TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <View style={styles.MainSerchConainer}>
        <View style={styles.searchContainer}>
        <TextInput placeholder="Email or Username" style={styles.input} />
        <TouchableOpacity style={styles.searchIcon}>
            <Icon name="search" size={25} color="#3A1347" />
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
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        margin:20,
    },
    CategoryName:{
        backgroundColor:'#E4E4E4',
        padding:10,
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