import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import DateTimePickerMod from 'react-native-modal-datetime-picker';
import { Formik } from 'formik';
import { text } from 'express';

export default function MakeApptOne() {







    return (
        <View style={styles.container}>

            <Text style={styles.titleText}>Make an Appointment</Text>

            <Formik onSubmit={onSubmitHandler}>
                <>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={{ justifyContent: 'flex-start', width: 150, }, styles.textBoxName}
                                placeholder='First Name'
                                // onChangeText = {(text)=>setFname(text)}
                                />
                        </View>
                        
                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={{ justifyContent: 'flex-end', width: 150, }, styles.textBoxName}
                                placeholder='Last Name'
                                // onChangeText = {(text)=>setLname(text)}
                            />
                        </View>
                    </View>


                    <View style={{ flexDirection: "row" }}>

                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={styles.textBoxPhone}
                                placeholder='Phone #'
                                keyboardType='phone-pad'
                                // onChangeText = {(text)=>setPhone(text)}
                            />
                        </View>

                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={styles.textBoxSpace}
                                placeholder='Space #'
                                keyboardType='numeric'
                                // onChangeText = {(text)=>setSpace(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.textBox}
                            placeholder='Address'
                            // onChangeText = {(text)=>setAddy(text)}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.textBox}
                            placeholder='E-mail'
                            keyboardType='email-address'
                            // onChangeText = {(e)=>setEmail(e.target.value)}
                        />
                    </View>

                    <Button type="submit" title="Submit"></Button>
                </>
            </Formik>

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
        width: 320,
    },
    textBoxName: {
        borderColor: '#ddd',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        width: 150,
    },
    textBoxSpace: {
        borderColor: '#ddd',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        width: 100,
    },
    textBoxPhone: {
        borderColor: '#ddd',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        width: 150,
    },
    btnCon: {
        alignSelf: 'center',
        marginTop: 10
    },
});