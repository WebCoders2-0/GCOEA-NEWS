import { View, Text,StyleSheet,Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Comments = ({comment}) => 
{

  return (
    <View style={styles.commentsSection}>
      <View style={styles.leftProfile}>
          <Image source={require('../../../assets/event.jpeg')} style={styles.commentProfilePic} />
      </View>
      <View styles={styles.rightContent}>
          <Text style={styles.commenterName}>{comment['user']['name']}</Text>
          <Text style={styles.commenterType}>{comment['user']['user_type']}</Text>
          <Text style={styles.commentContent}>
              {comment.comment}
          </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    commentsSection:{
      margin:15,
      padding:10,
      flexDirection:'row',
      borderRadius:10,
      padding:10,
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
    commentProfilePic:{
      height:60,
      width:60,
      borderRadius:50,
      marginRight:10,
    },
    commenterName:{
      marginTop:5,
      fontWeight:'700',
      fontSize:16,
    },
    commenterType:{
      color:'gray',
      marginBottom:5
    },
    commentContent:{
      width:260,
      fontSize:15,
    }

})

export default Comments