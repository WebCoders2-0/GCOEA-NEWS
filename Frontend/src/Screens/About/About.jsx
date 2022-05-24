import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import ScreenHeader from '../../component/Header/ScreenHeader';

const About = () => {
    return (
        <View>
            <ScreenHeader />
            <ScrollView style={styles.aboutContainer}>
                <Text style={styles.aboutHeading}>About</Text>
                <Text style={styles.createrHeading}>Creaters</Text>
                <View style={styles.createrSection}>
                    <TouchableOpacity style={styles.creatercard}>
                        <Image style={styles.createrImage} source={require('../../../assets/event.jpeg')} />
                        <Text style={styles.creatorName}>Aditya Chandrikapure</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.creatercard}>
                        <Image style={styles.createrImage} source={require('../../../assets/event.jpeg')} />
                        <Text style={styles.creatorName}>Ankush Chavhan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.creatercard}>
                        <Image style={styles.createrImage} source={require('../../../assets/event.jpeg')} />
                        <Text style={styles.creatorName}>Raksha Jogi</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.GuideHeading}>Guide</Text>
                <View style={styles.guideContainer}>
                    <View style={styles.guideprofile}>
                        <Image style={styles.guideProfile} source={require('../../../assets/event.jpeg')} />
                    </View>
                    <View style={styles.guideDetails}>
                        <Text style={styles.guideName}>Dr. P. B. Ambhore</Text>
                        <Text style={styles.college}>GCOE Amravati</Text>
                    </View>
                </View>

                <Text style={styles.featureHeading}>Features</Text>
                <Text style={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
                    veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
                    deleniti explicabo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
                    veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
                    deleniti explicabo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
                    veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
                    deleniti explicabo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
                    veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
                    deleniti explicabo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
                    veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
                    deleniti explicabo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero, magnam omnis doloribus qui debitis. Voluptatum animi, e
                    veniet officia accusantium laudantium ipsum sunt, amet dolorem eum quas unde,
                    deleniti explicabo.
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutHeading: {
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '700',
        textDecorationLine: 'underline',
    },
    createrHeading: {
        marginHorizontal: 10,
        fontWeight: '700',
        margin: 10,
        marginBottom: 0,
        fontSize: 18
    },
    createrSection: {
        flexDirection: 'row',
        margin: 10
    },
    creatercard: {
        overflow: 'hidden',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
        paddingVertical: 5,
    },
    createrImage: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    creatorName: {
        width: 100,
        textAlign: 'center',
        marginVertical: 5,
        fontWeight: '700',
    },
    GuideHeading: {
        marginHorizontal: 10,
        fontWeight: '700',
        margin: 10,
        marginBottom: 0,
        fontSize: 18
    },
    guideContainer: {
        margin: 10,
        flexDirection: 'row',
        padding: 10,
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.5,
        elevation: 5
    },
    guideProfile: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    guideDetails: {
        marginHorizontal: 10,
    },
    guideName: {
        fontSize: 20,
        fontWeight: '700'
    },
    college: {
        fontWeight: '700',
        marginVertical: 5
    },
    featureHeading: {
        marginHorizontal: 10,
        fontWeight: '700',
        margin: 10,
        marginBottom: 0,
        fontSize: 18
    },
    content: {
        marginHorizontal: 10,
        fontWeight: '600',
        margin: 10,
        marginBottom: 0,
        fontSize: 18
    },

})

export default About;