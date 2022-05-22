import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const UserCardSection = ({ title, img, datetime }) =>{
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
            <View style={styles.favoriteImg}>
                <TouchableOpacity style={styles.icons}>
                    <Icon name="trash" size={25} color="red" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <Icon name="edit" size={25} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <Icon name="heart" size={25} color="#3A1347" />
                </TouchableOpacity>
            </View>
        </View>
    </View>

    )
}

const UserCard = () => {
    return (
        <ScrollView>
            <UserCardSection title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <UserCardSection title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <UserCardSection title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <UserCardSection title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
            <UserCardSection title={'Hello world Gcoea'} img={require('../../../assets/event.jpeg')} datetime={'22 Nov 2022'}/>
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
    favoriteImg: {
        position: 'absolute',
        width: 45,
        height: 45,
        bottom: 10,
        top: 100,
        left:60,
        flexDirection:'row',
    },
    icons:{
        marginHorizontal:8
    }

})

export default UserCard;