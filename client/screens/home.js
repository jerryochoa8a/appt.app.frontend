import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Linking, ImageBackground, Text, View, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Form, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';// form icon
import { AntDesign } from '@expo/vector-icons'; //user icon //facebook
import { Ionicons } from '@expo/vector-icons';  //i icon
import React, { useState, render } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Login from './login';
import MakeApptOne from './makeApptOne';
import MakeApptTwo from './makeApptTwo';
import MakeApptThree from './makeApptThree';


export default function Home({ navigation }) {


  const [apptModelOpen, setApptModelOpen] = useState(false);
  //make sure your using the right one
  const [pageNum, setPageNum] = useState(0); //I Use the Number to change the page bc the if statements didn't work with the 'PageTag state'
  const [pageTag, setPageTag] = useState(<MakeApptOne />)
  const [formButtonTitle, setFormButtonTitle] = useState('Next')

  const addPageAndSubmit = () => {
    if (pageNum == 0) {
      setPageTag(<MakeApptTwo />)
    }
    if (pageNum == 1) {
      setPageTag(<MakeApptThree />);
      setFormButtonTitle('')
    }
    var sum = 0;
    sum = sum + 1;
    setPageNum(sum);
  }

  const closeModal = () => {
    setPageTag(<MakeApptOne />);
    setApptModelOpen(false);
    setPageNum(0);
    setFormButtonTitle('Next');
    // console.log(pageNum);
  }
  
  const faceBookLink = () => {
    Linking.openURL('https://www.facebook.com/santaClaritaRV/');// ('fb://page/PAGE_ID')
  }


  return (
    <>
      {/* start of pop up models */}
      {/* -------------Appt Modal----------- */}
      <Modal visible={apptModelOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={StyleSheet.modelCon}>
            <MaterialIcons
              name='close'
              size={27}
              style={{ ...styles.openClose, ...styles.openClose2 }} //how to add two styles
              // onPress={() => setApptModelOpen(false)}
              onPress={closeModal}
            />
            {pageTag}
            <Button title={formButtonTitle} onPress={addPageAndSubmit}></Button>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* -------------Appt Modal----------- */}
      {/* end of pop up models */}


      <View style={styles.body}>

        <ScrollView>

          <View style={styles.boxCon}>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <View style={styles.box}>
                <AntDesign name="user" style={styles.boxIcon} size={35} color="black" />
                <Text style={styles.boxText}>Sign In</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setApptModelOpen(true)}>
              <View style={styles.box}>
                <Text style={styles.boxText2}>Make</Text>
                <MaterialCommunityIcons name="format-float-none" style={styles.boxIcon2} size={35} color="black" />
                <Text style={styles.boxText2}> Appt.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <View style={styles.box}>
                <Ionicons name="ios-information-circle-outline" style={styles.boxIcon} size={35} color="black" />
                <Text style={styles.boxText}>About</Text>
              </View>
            </TouchableOpacity>

          </View>

          {/* <View style={styles.pictureBox}></View> */}
          <ImageBackground style={styles.pictureBox} source={require('../images/santa_clarita.jpg')} />
          <Text style={styles.boldText}>We work all throughout The Santa Clarita Valley </Text>
          <Text style={styles.lowText}> As well as San Fernando Valley and some parts of Los Angeles.</Text>

          <TouchableOpacity onPress={faceBookLink}>
            <View style={styles.facebookBox}>
              <View style={{ width: 110, height: 110, }}>
                <AntDesign style={{alignSelf:'center'}} name="facebook-square" size={100} color="#3b5998" />
              </View>
              <View style={{ width: 230, height: 110, }}>
                <Text style={{ color:'#1AAD8F', fontSize: 21, fontWeight: 'bold', alignSelf: 'center' }}>Follow us on Facebook for announcements and seasonal operating hours.</Text>
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#E6EBF5',
    height: '100%',
  },
  boxCon: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  box: {
    // backgroundColor: '#3B76F7',
    backgroundColor: '#1AAD8F',
    borderColor: 'black',
    height: 110,
    width: 110,
    margin: 5,
  },
  boxText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
  },
  boxText2: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
  },
  boxIcon: {
    alignSelf: 'center',
    paddingTop: 30,
  },
  boxIcon2: {
    alignSelf: 'center',
    // paddingTop: 30,
  },
  pictureBox: {
    backgroundColor: 'gray',
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: 'center',
    marginTop: 20,
    height: 260,
    width: 340,
  },
  boldText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  lowText: {
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 20,
    padding: 2,
    marginStart: 10,
    marginEnd: 10
  },
  openClose: {
    borderColor: '#f2f2f2',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
  },
  openClose2: {
    marginBottom: 0,
    marginTop: 25,
  },
  facebookBox: {
    // backgroundColor: '#1AAD8F',
    alignContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    height: 110,
    width: 340,
  }
});
