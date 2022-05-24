import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; 


const NewsCard = ({ title, img, datetime,slug }) =>{
    const navigator = useNavigation();
    return (
        <View style={styles.newsCardContainer}>
        <TouchableOpacity style={styles.newsCardLeft} onPress={() => navigator.navigate('viewNews',{slug:slug})}>
            {img !== "http://10.0.2.2:8000null" ? <Image source={{uri:img}} style={styles.newsImage} />:
            <Image source={require('../../../assets/event.jpeg')} style={styles.newsImage} />}
        </TouchableOpacity>
        <View style={styles.newsCardRight}>
            <TouchableOpacity style={styles.newsTitleSection} onPress={() => navigator.navigate('viewNews',{slug:slug})}>
                <Text style={styles.Newstitle}>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.Newsdatetime}>{datetime}</Text>
            <TouchableOpacity style={styles.favoriteImg}>
                <Icon name="heart" size={25} color="#3A1347" />
            </TouchableOpacity>
        </View>
    </View>

    )
}

const NewsCards = ({news,navigation}) => {
    return (
        <ScrollView>
            {news !== null ? (news.map((nws) =>{
                return (<NewsCard key={nws.id} slug={nws.slug} title={nws.title} img={"http://10.0.2.2:8000"+ nws.image} datetime={nws.created_datetime} />)
            })
            ):<Text style={{textAlign:'center',fontWeight:'700',fontSize:18,marginTop:20}}>No News is added till now...</Text>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    newsCardContainer: {
        flexDirection: 'row',
        margin: 10,
        marginVertical: 10,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#E4E4E4',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.5,
        elevation: 5
    },
    newsCardLeft: {
        width: 180,
        borderRadius: 10,
        margin: 10,
        marginRight: 0,
        position:'relative',
    },
    newsImage: {
        height: 130,
        width: 160,
        borderRadius: 10,
    },
    newsCardRight: {
        flexDirection: 'column',
        margin: 10,
        marginLeft: 0,
    },
    newsTitleSection:{
    },
    Newstitle: {
        fontWeight: '700',
        fontSize: 18,
        width:150,
        overflow:'hidden',
    },
    Newsdatetime:{
        width:150,
    },
    favoriteImg: {
        position: 'absolute',
        width: 30,
        height: 30,
        bottom: 10,
        top: 100,
        left:140,
    }

})

export default NewsCards;