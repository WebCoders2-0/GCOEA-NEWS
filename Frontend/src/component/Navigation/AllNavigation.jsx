import React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity, Settings } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';



// ======================== user screen ======================= //

import AddNews from '../../Screens/AddNews/AddNews';
import AllNews from '../../Screens/AllNews/AllNews';
import ViewNews from '../../Screens/ViewNews/ViewNews';

// ======================== user screen ======================= // 


// ---------------main screens ------------------------------- //
import Profile from '../../Screens/Profile/Profile';
import ScreenSettings from '../../Screens/Settings/ScreenSettings';
import Favorite from '../../Screens/Favourite/Favorite';
import About from '../../Screens/About/About';
import Home from '../../Screens/HomeScreen/Home';
// ---------------main screens ------------------------------- //

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const CustomerTabBarButton = ({children,onPress}) =>
{
    return (
        <TouchableOpacity  onPress={onPress} style={{
            top:-30,
            justifyContent:'center',
            alignItems:'center',
            ...styles.shadow
        }}>
            <View style={{
                width:80,
                height:80,
                borderRadius:45,
                backgroundColor:'#3A1347',
                borderWidth:8,
                borderColor:'#fff'
            }}>
                {children}
            </View>
        </TouchableOpacity>
    )


}

const Tabs = () => {
  return (
   <Tab.Navigator  initialRouteName="Home" screenOptions={{
       tabBarShowLabel : false,
       tabBarStyle:{
           position:'absolute',
           bottom:10,
           left:10,
           right:10,
           elevation:0,
           backgroundColor:'#3A1347',
           borderRadius:15,
           height:90,
           paddingBottom:10,
           ...styles.shadow
       },
       headerShown: false,
       tabBarHideOnKeyboard:true,
   }}>

    <Tab.Screen name="profile" component={Profile}
       options={{
           tabBarIcon:({focused}) =>
           {
               return (<View style={{
                   alignItems:'center',
                   justifyContent:'center',
                   top:10,
               }}>
                   <Icon name="user" size={30} color={focused ? "#e32f45" : '#fff'} />
                   <Text style={{color:focused ? '#e32f45' : '#fff', fontSize:12}}>Profile</Text>
               </View>)
           },
       }} />
       <Tab.Screen name="favorite" component={Favorite} 
        options={{
            tabBarIcon:({focused}) =>
            {
                return (<View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    top:10,
                }}>
                    <Icon name="bookmark" size={30} color={focused ? "#e32f45" : '#fff'} />
                    <Text style={{color:focused ? '#e32f45' : '#fff', fontSize:12}}>Favorite</Text>
                </View>)
            }
        }}
        />
       <Tab.Screen name="Home" component={Home}  
        options={{
            tabBarIcon:({focused}) =>
            {
                return (<Icon name="home" size={30} color={focused ? "#e32f45" : '#fff'} />)
            },
            tabBarButton:(props) =>
            {
                return (
                    <CustomerTabBarButton {...props} />
                )
            }
        }}/>
       <Tab.Screen name="about" component={About} 
          options={{
            tabBarIcon:({focused}) =>
            {
                return (<View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    top:10,
                }}>
                    <Icon name="address-card" size={30} color={focused ? "#e32f45" : '#fff'} />
                    <Text style={{color:focused ? '#e32f45' : '#fff', fontSize:12}}>About</Text>
                </View>)
            }
        }}/>
       <Tab.Screen name="settings" component={ScreenSettings}   options={{
           tabBarIcon:({focused}) =>
           {
               return (<View style={{
                   alignItems:'center',
                   justifyContent:'center',
                   top:10,
               }}>

                    <Icon name="gear" size={30} color={focused ? "#e32f45" : '#fff'} />
                   <Text style={{color:focused ? '#e32f45' : '#fff', fontSize:12}}>Settings</Text>
               </View>)
           }
       }}/>
   </Tab.Navigator>
  )
}


const AllNavigation = () =>
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="mainTab" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="addNews" component={AddNews} options={{ headerShown: false }}/> 
            <Stack.Screen name="allNews" component={AllNews} options={{ headerShown: false }}/> 
            <Stack.Screen name="viewNews" component={ViewNews} options={{ headerShown: false }}/> 
        </Stack.Navigator>
    )

}

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.35,
        shadowRadius:3.5,
        elevation:5
    },
    absoluteFill:{
        backgroundColor:'gray'
    }
})

export default AllNavigation;