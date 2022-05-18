import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import HomeLoginScreen from './src/Screens/HomeLoginScreen/HomeLoginScreen';
import PublicLoginScreen from './src/Screens/PublicLoginScreen/PublicLoginScreen';
import PublicRegisterScreen from './src/Screens/PublicRegisterScreen/PublicRegisterScreen';
import StudentLoginScreen from './src/Screens/StudentLoginScreen/StudentLoginScreen';
import StudentRegisterScreen from './src/Screens/StudentRegisterScreen/StudentRegisterScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name='Home' component={HomeLoginScreen} />
       <Stack.Screen name="Public Login" component={PublicLoginScreen} />
       <Stack.Screen name="Public Register" component={PublicRegisterScreen} />
       <Stack.Screen name="Student Login" component={StudentLoginScreen} />
       <Stack.Screen name="Student Register" component={StudentRegisterScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  // <View style={styles.PublicLogin}>
  //   <View style={styles.PublicLoginTop}>
  //     <Image source={require("./assets/undraw_Mobile_login_re_9ntv.png")} style={styles.homeImg}/>
  //   </View>

  //   <View style={styles.PublicLoginBottom}>
  //     <TextInput placeholder="Name" style={styles.input} />
  //     <TextInput placeholder="Register Id" style={styles.input} />
  //     <TextInput placeholder="Email" style={styles.input} />
  //     <TextInput placeholder="Mobile No." style={styles.input} />
  //     <TextInput placeholder="Password" style={styles.input} />

  //     {/* <Text style={styles.forgotText}>Forgot Password ?</Text> */}

  //     <View style={styles.loginButtonWrapper}><TouchableOpacity><Text style={styles.loginButtonText}>Register</Text></TouchableOpacity></View>

  //     <View><Text style={styles.bottomText}>Already have an account ? <Text style={styles.createOne}>Login</Text></Text></View>
  //   </View>

  // </View>
  );
}

const styles = StyleSheet.create({
  PublicLogin : {
    flex : 1,
  },
  PublicLoginTop : {
     flex : 1,
     justifyContent: 'center',
     alignItems : "center",
  },
  PublicLoginBottom : {
    flex : 2,
    justifyContent: 'center',
    alignItems : "center",

  },
  homeImg : {
     width: "70%",
     height : "57%",
     marginHorizontal : 20,
     marginTop : "25%",
  },
  input: {
    width: "80%",
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius : 5,
    paddingVertical : 10,
    paddingHorizontal : 20,
 },
 forgotText : {
   width: "80%",
  textAlign : "right",
  
 },
 loginButtonWrapper : {
   width: "80%",
 },
 loginButtonText : {
   width: "100%",
   backgroundColor : "#3A1347",
   marginVertical : 20,
   color : "white",
   textAlign : "center",
   paddingVertical : 15,
   borderRadius : 5,
   fontSize : 16,
   fontWeight : "500",
 },
 bottomText : {
   fontSize : 16,
   marginTop : 10,
 },
 createOne : {
   color : "blue",
 }
});
