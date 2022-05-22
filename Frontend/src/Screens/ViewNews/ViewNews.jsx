import React from 'react';
// import Pdf from 'react-native-pdf';
import { View, Text,StyleSheet,Image,ScrollView,TextInput,TouchableOpacity } from 'react-native';
import ScreenHeader from '../../component/Header/ScreenHeader';
import Comments from '../../component/Comments/Comments';

const ViewNews = (props) => 
{
    const source = {};
    // const source = { uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', cache: true };
  return (
    <View style={styles.viewNewsContainer}>
      <ScreenHeader />

      <ScrollView style={{MarginBottom:300,}}>
        <Text style={styles.newsTitle}>News Title</Text>
        <Text style={styles.Newsdatetime}>Datetime</Text>
            {source ? (<View style={styles.PdfViewer}>
                {/* <Pdf
                        source={source}
                        onLoadComplete={(numberOfPages,filePath) => {
                            console.log(`Number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page,numberOfPages) => {
                            console.log(`Current page: ${page}`);
                        }}
                        onError={(error) => {
                            console.log(error);
                        }}
                        onPressLink={(uri) => {
                            console.log(`Link pressed: ${uri}`);
                        }}
                        style={{flex:1,}}/> */}

                <Image style={styles.NewsEventPhoto} source={require('../../../assets/event.jpeg')}/>
                <View style={styles.newsContent} >
                    <Text style={styles.newsconetent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatibus doloremque libero. 
                        Sunt aut eaque enim voluptatibus iure illo quia, sequi minima rem, fugiat voluptas quae, voluptatum nobis.
                        Iusto, doloremque.
                    </Text>
                </View>
            </View>):(<View style={styles.EventContainer}>
                <Image style={styles.NewsEventPhoto} source={require('../../../assets/event.jpeg')}/>
                <View style={styles.newsContent}>
                    <Text style={styles.newsconetent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatibus doloremque libero. 
                        Sunt aut eaque enim voluptatibus iure illo quia, sequi minima rem, fugiat voluptas quae, voluptatum nobis.
                        Iusto, doloremque.
                    </Text>
                </View>
            </View>)}

            <Text style={styles.commentHeading}>Comments</Text>
            <View style={styles.commentSection}>
                <Comments />
                <Comments />
                <Comments />
            </View>
      <Text style={styles.addcommentHeading}>Add Comment</Text>
      <View style={styles.AddComment}>
          <TextInput placeholder='add our Comment' style={styles.commentBox} />
          <TouchableOpacity style={styles.commentBtn}>
              <Text style={styles.commentbtnText}>Send</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    newsTitle:{
        fontWeight:'700',
        fontSize:25,
        margin:10,
    },
    Newsdatetime:{
        fontWeight:'700',
        margin:10,
    },
    EventContainer:{
        margin:10,
        justifyContent:'center',
    },
    NewsEventPhoto:{
        height:200,
        width:370,
        margin:10,
        borderRadius:5,
    },
    newsContent:{
        margin:10,
    },
    newsconetent:{
        fontSize:18,
        fontWeight:'600'
    },
    commentHeading:{
        margin:10,
        textAlign:'left',
        fontWeight:'700',
        fontSize:22,
    },
    AddComment:{
        margin:10,
        marginBottom:100,
        flexDirection:'row',
        alignItems:'center'
    },
    addcommentHeading:{
        margin:5,
        marginHorizontal:20,
        textAlign:'left',
        fontWeight:'700',
        fontSize:20,
    },
    commentBox:{
        width: "65%",
        margin: 5,
        height: 60,
        borderColor: "#3A1347",
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#3A1347',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.35,
        shadowRadius: 0.5,
        elevation: 3
    },
    commentBtn:{
        alignItems:'center',
        backgroundColor:'gray',
        height:60,
        width:100,
        padding:10,
        paddingHorizontal:30,
        borderRadius:30,
    },
    commentbtnText:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:16,
        marginTop:10
    },

})

export default ViewNews;