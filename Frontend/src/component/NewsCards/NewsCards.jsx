import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';

const NewsCard = ({ title, img, datetime }) =>{
    return (
        <View style={styles.newsCardContainer}>
        <TouchableOpacity style={styles.newsCardLeft}>
            <Image source={img} style={styles.newsImage} />
        </TouchableOpacity>
        <View style={styles.newsCardRight}>
            <TouchableOpacity>
                <Text style={styles.Newstitle}>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.Newsdatetime}>{datetime}</Text>
            <TouchableOpacity>
                <Image source={require('../../../assets/icon.png')} style={styles.favoriteImg} />
            </TouchableOpacity>
        </View>
    </View>

    )
}

const NewsCards = () => {
    return (
        <ScrollView>
            <NewsCard title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <NewsCard title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <NewsCard title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <NewsCard title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <NewsCard title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    newsCardContainer: {
        flexDirection: 'row',
        margin: 10,
        marginVertical: 10,
        height: 180,
        borderRadius: 10,
        backgroundColor: 'gray',
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
    },
    newsImage: {
        height: 160,
        width: 160,
        borderRadius: 10,
    },
    newsCardRight: {
        flexDirection: 'column',
        margin: 10,
        marginLeft: 0,
    },
    Newstitle: {
        fontWeight: '700',
        fontSize: 18
    },
    favoriteImg: {
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: 10,
        top: 80,
        right: -20
    }

})

export default NewsCards;