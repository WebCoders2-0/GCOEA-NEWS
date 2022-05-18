import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Link } from '@react-navigation/native';

export default function HomeLoginScreen() {
  return (
    <View style={styles.HomeLoginContainer}>
      <View style={styles.top}>
        <Text>
          <Image
            source={require("./../../../assets/happy.png")}
            style={styles.simileImg}
          />
        </Text>
        <Text style={styles.HeadingText}>GECOEA NEWS</Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.loginButtons}>
          <Text style={styles.buttonText}><Link to={{screen : 'Student Login'}}>Login As Student</Link></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtons}>
          <Text style={styles.buttonText}><Link to={{screen : 'Student Login'}}>Login As Admin</Link></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtons}>
          <Text style={styles.buttonText}><Link to={{screen : 'Public Login'}}>Login As Public</Link></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeLoginContainer: {
    flex: 1,
    backgroundColor: "#3A1347",
  },
  HeadingText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginVertical: 15,
  },
  simileImg: {
    width: 60,
    height: 60,
    borderRadius : 20,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtons: {
    width: "80%",
    backgroundColor: "#D6CDFE",
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#3A1347",
    textAlign : "center",
    fontWeight : "bold",
    fontSize: 16,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
