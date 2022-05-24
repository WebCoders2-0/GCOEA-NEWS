import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { AuthContext } from './src/component/context';

import AllNavigation from './src/component/Navigation/AllNavigation';
import LoginStack from './src/component/LoginStack/LoginStack';

const Stack = createNativeStackNavigator();

export default function App() 
{

  const initialLoginState = {
    user: null,
    token: null,
    news:null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          token: action.token,
          user:action.user
        };
      case 'STUDENT_LOGIN': 
        return {
          ...prevState,
          token: action.token,
        };
      case 'PUBLIC_LOGIN': 
        return {
          ...prevState,
          token: action.token,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          token: null,
        };
      case 'GET_NEWS': 
        return {
          ...prevState,
          news:action.news,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() => ({
    studentLoginHandle: async(registerId,password) => {
      let token = null;
      try {
        const res = await axios.post("http://10.0.2.2:8000/api/student_login/",{
          username : registerId,
          password : password
        });
        const data = await res.data;
        await AsyncStorage.setItem('token',data['token']);
        token = data['token'];
        console.log(token);
        getTokenFunction();
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'STUDENT_LOGIN', token: token });
    },
    publicLoginHandle: async (username,password) =>{
      let token  = null;
      try{
        const res = await fetch('http://10.0.2.2:8000/api/public_login/', {
          method: 'POST',
          mode:'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password})
          })
          const data = await res.json();
          token = data['token'];
          await AsyncStorage.setItem('token',data.token);
          getTokenFunction();

      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'PUBLIC_LOGIN', token: token });
    },
    logout: async() => { 
      try {
        await AsyncStorage.removeItem('token');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    getAllNews: async (user_type) =>{
      let news = null;
      try{
        console.log(user_type);
        const token = await AsyncStorage.getItem('token');
        console.log("user type : ",user_type)
        const res = await axios.get(`http://10.0.2.2:8000/api/filter-news/?user_type=${user_type}`,{
          headers:{
            "Authorization":`token ${token}`,
            'Content-Type':'application/json'
          }
        });
        const data = await res.data;
        await AsyncStorage.setItem('news',JSON.stringify(data));
        news = data;
      } catch (err) {
        console.log(err);
      }
      dispatch({ type: 'GET_NEWS',news:news });

   }
  }), []);


  useEffect(() =>{
    getTokenFunction();
  },[]);
  
  const getTokenFunction = async () =>{
    let user = null;
    try {
      const value = await AsyncStorage.getItem('token');
      if(value !== null)
      {
        try {
          const res = await axios.get("http://10.0.2.2:8000/api/get-user/",{
            headers:{
              'Authorization':`token ${value}`,
              'Content-Type':'application/json'
            }});
          const data = await res.data;
          console.log(data)
          await AsyncStorage.setItem('user',JSON.stringify(data));
          user = data;
        } catch(e) {
          console.log(e.message);
        }
        dispatch({ type: 'RETRIEVE_TOKEN', token: value,user : user });
      }
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer options={{headerShown: false}}>
        <Stack.Navigator>
        {loginState.token === null ?(<Stack.Screen name="loginStack" component={LoginStack} options={{ headerShown: false }} />):
            <Stack.Screen name='tabs' component={AllNavigation} options={{ headerShown: false }} />}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  
  );
}

