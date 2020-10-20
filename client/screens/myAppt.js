import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function myAppt({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <MaterialCommunityIcons name="format-float-none" style={styles.boxIcon2} size={35} color="#3b444b" />
                <Text style={{fontSize:17, color: '#3b444b', marginTop: 25}}>You don't have any Appointments</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.box2}>
                <Text style={{fontSize:22, color: 'black', marginTop: 25, fontWeight: 'bold'}}>Did you make an Appointment while signed into your Account?</Text>
                <Text style={{fontSize:16,marginTop: 20, color:'#3b444b'}}>Please sign in to view your rentals</Text>
            </View>
            {/* <View style={styles.Box3}></View> */}
            {/* <Button style={{color: 'black'}} title='SIGN IN'></Button> */}
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        alignSelf: 'center',
        alignItems: 'center'
    },
    box1: {
        // backgroundColor: '#D3D3D3',
        width: 310,
        // width: 400,
        height: 130,
        alignItems:'center',
        marginTop:5,
    },
    box2: {
        // backgroundColor: 'red',
        alignItems:'center',
        alignContent: 'center',
        width: 280,
        height: 160,
    },
    button: {
        backgroundColor: '#1AAD8F',
        width:310,
        height:50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 13
    },
    line: {
        width: 400,
        height: 1,
        backgroundColor:'#3b444b'
    }
});