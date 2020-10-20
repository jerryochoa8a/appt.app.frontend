import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

export default function MakeApptTwo() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>RV Info</Text>

            <Formik>
                <>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={{ justifyContent: 'flex-start', width: 150, }, styles.textBoxName}
                                placeholder='Make'
                            />
                        </View>
                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={{ justifyContent: 'flex-end', width: 150, }, styles.textBoxName}
                                placeholder='Model'
                            />
                        </View>
                    </View>

                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.textBox}
                            placeholder='V.I.N(Optional)'
                        />
                    </View>

                    <View style={{ flexDirection: "row" }}>

                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={styles.textBoxPhone}
                                placeholder='Year'
                            />
                        </View>

                        <View style={{ flex: 1, }}>
                            <TextInput
                                style={styles.textBoxSpace}
                                placeholder='License'
                            />
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
});