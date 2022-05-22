import { View, Text,TextInput,StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import React,{useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import ScreenHeader from '../../component/Header/ScreenHeader';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const AddNews = () => {
    const [value, setValue] = useState(null);
  return (
    <View>
      <ScreenHeader />
      <ScrollView style={{paddingBottom:150}}>
      <Text style={styles.addNewsHeading}>AddNews</Text>

      <View style={styles.InputField}>
          <Text style={styles.InputLabel}>Title</Text>
          <TextInput placeholder='Enter The Title' type={'file'} style={styles.input_field}/> 
      </View>
      <View style={styles.InputField}>
          <Text style={styles.InputLabel}>Type of News</Text>
        <Dropdown
            style={styles.input_field}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select item'}
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            />
      </View>
      <View style={styles.InputField}>
          <Text style={styles.InputLabel}>Which type og user</Text>
        <Dropdown
            style={styles.input_field}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select item'}
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            />
      </View>
      <View style={styles.InputField}>
          <Text style={styles.InputLabel}>Content</Text>
          <TextInput placeholder='Enter The Title'
            multiline
            numberOfLines={4}
            maxLength={40}
            style={[styles.input_field,{height:50,alignItems:'baseline'}]}/> 
      </View>
      <View style={styles.InputField}>
          <Text style={styles.InputLabel}>Images</Text>
          <TextInput placeholder='Enter The Title' style={styles.input_field}/> 
      </View>
      <View style={styles.InputField}>
          <Text style={styles.InputLabel}>Upload Pdf</Text>
          <TextInput placeholder='Enter The Title' style={styles.input_field}/> 
      </View>
      <TouchableOpacity style={styles.SubmitButton}>
          <Text style={styles.btnText}>Upload News</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
};


const styles = StyleSheet.create({
    addNewsHeading:{
        textAlign:'center',
        fontSize:23,
        fontWeight:'700',

    },
    InputField:{
        flexDirection:'column',
        margin:10,
    },
    InputLabel:{
        marginHorizontal:15,
        fontSize:15,
        fontWeight:'700'
    },
    input_field:{
        width: "95%",
        margin: 5,
        height: 50,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.5,
        elevation: 5
    },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

      SubmitButton:{
          padding:10,
          paddingHorizontal:30,
          backgroundColor:'#3A1347',
          margin:40,
          marginTop:10,
          borderRadius:5,
      },
      btnText:{
          textAlign:'center',
          color:'#fff',
          fontWeight:'700',
          fontSize:18,
      }

})

export default AddNews;