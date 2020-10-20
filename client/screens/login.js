import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';


export default function Login( {navigation} ) {
    return (
        <View style={styles.container}>

            <Text style={styles.titleText}>Login to your account</Text>


            <Formik>
                <>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.textBox}
                            placeholder='Email'
                            keyboardType='email-address'
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.textBox}
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>SIGN IN</Text>
                        </View>
                    </TouchableOpacity>
                </>
            </Formik>

            <View style={{ marginTop: 20 }}>
                <Button style={styles.btnCon} onPress={() => navigation.navigate('createLogin')} title='Create an Account'></Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    titleText: {
        alignSelf: 'center',
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 20,
    },
    textBox: {
        borderColor: '#ddd',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        width: 340,
    },
    btnCon: {
        alignSelf: 'center',
        marginTop: 20
    },
    button: {
        backgroundColor: '#1AAD8F',
        width: 310,
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 13
    },
});