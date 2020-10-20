import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Picker } from 'react-native';
import { Formik } from 'formik';
// import { ScrollView } from 'react-native-gesture-handler';
// import ScrollPicker from 'react-native-wheel-scroll-picker';

export default function MakeApptThree() {

    const [monthValue, setMonthValue] = useState("January")
    const [dayValue, setDayValue] = useState('1')
    const [hourValue, setHourValue] = useState("8:00 AM")


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Set Appointment Date</Text>

            <Formik>
                <>
                    <View>
                        <Button title="Finish" />
                    </View>

                    <View style={styles.pickerBox}>


                        <View>
                            <Picker
                                selectedValue={monthValue}
                                style={{ height: 50, width: 110 }}
                                onValueChange={(itemValue, itemIndex) => setMonthValue(itemValue)}
                            >
                                <Picker.Item label="January" value="January" />
                                <Picker.Item label="February" value="February" />
                                <Picker.Item label="March" value="March" />
                                <Picker.Item label="April" value="April" />
                                <Picker.Item label="May" value="May" />
                                <Picker.Item label="June" value="June" />
                                <Picker.Item label="July" value="July" />
                                <Picker.Item label="August" value="August" />
                                <Picker.Item label="September" value="September" />
                                <Picker.Item label="October" value="October" />
                                <Picker.Item label="November" value="November" />
                                <Picker.Item label="December" value="December" />
                            
                            </Picker>

                            <Text style={{fontSize:25, fontWeight:'bold'}}>Date:</Text>
                        
                        </View>
                        <View>
                            <Picker
                                selectedValue={dayValue}
                                style={{ height: 50, width: 70 }}
                                onValueChange={(itemValue, itemIndex) => setDayValue(itemValue)}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                                <Picker.Item label="10" value="10" />
                                <Picker.Item label="11" value="11" />
                                <Picker.Item label="12" value="12" />
                                <Picker.Item label="13" value="13" />
                                <Picker.Item label="14" value="14" />
                                <Picker.Item label="15" value="15" />
                                <Picker.Item label="16" value="16" />
                                <Picker.Item label="17" value="17" />
                                <Picker.Item label="18" value="18" />
                                <Picker.Item label="19" value="19" />
                                <Picker.Item label="20" value="20" />
                                <Picker.Item label="21" value="21" />
                                <Picker.Item label="22" value="22" />
                                <Picker.Item label="23" value="23" />
                                <Picker.Item label="24" value="24" />
                                <Picker.Item label="25" value="25" />
                                <Picker.Item label="26" value="26" />
                                <Picker.Item label="27" value="27" />
                                <Picker.Item label="28" value="28" />
                                <Picker.Item label="29" value="29" />
                                <Picker.Item label="30" value="30" />
                                <Picker.Item label="31" value="31" />
                            </Picker>
                        </View>
                        <View>
                            <Picker
                                selectedValue={hourValue}
                                style={{ height: 50, width: 180 }}
                                onValueChange={(itemValue, itemIndex) => setHourValue(itemValue)}
                                >
                                <Picker.Item label="8:00 AM" value="8:00 AM" />
                                <Picker.Item label="8:30 AM" value="8:30 AM" />
                                <Picker.Item label="9:00 AM" value="9:00 AM" />
                                <Picker.Item label="9:30 PM" value="9:30 AM" />
                                <Picker.Item label="10:00 AM" value="10:00 AM" />
                                <Picker.Item label="10:30 PM" value="10:30 AM" />
                                <Picker.Item label="11:00 AM" value="11:00 AM" />
                                <Picker.Item label="11:30 PM" value="11:30 AM" />
                                <Picker.Item label="12:00 PM" value="12:00 PM" />
                                <Picker.Item label="12:30 PM" value="12:30 PM" />
                                <Picker.Item label="1:00 PM" value="1:00 PM" />
                                <Picker.Item label="1:30 PM" value="1:30 PM" />
                                <Picker.Item label="2:00 PM" value="2:00 PM" />
                                <Picker.Item label="2:30 PM" value="2:30 PM" />
                                <Picker.Item label="3:00 PM" value="3:00 PM" />
                                <Picker.Item label="3:30 PM" value="3:30 PM" />
                            </Picker>
                            
                            <Text style={{fontSize:25, fontWeight:'bold', marginStart: 25}}>Time:</Text>

                        </View>


                    </View>
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
    pickerBox: {
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
    }
});