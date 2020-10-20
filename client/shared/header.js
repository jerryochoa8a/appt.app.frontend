import React from 'react';
import { StyleSheet, Text, View, Image, Linking, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    const call =() => {
        Linking.openURL(`tel:${6616785943}`)
    }

    return (
        <View style={styles.header}>
            {/*icon for the menu */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon_menu} />
            <Text style={styles.headerText}>{title}</Text>
            <MaterialIcons name='phone' size={28} onPress={call} style={styles.icon_phone}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: 380,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        // backgroundColor: '#3B76F7',
        backgroundColor: '#1AAD8F',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        // color: 'white',
        letterSpacing: 1,    
    },
    icon_menu: {
        position: 'absolute',
        left: 16,
        paddingTop: 35
    },
    icon_phone: {
        position: 'absolute',
        right: 16,
        paddingTop: 35
    },
    hederImage: {
        width: 26,
        height: 26,
    },
    flex: {
        flexDirection: 'row', //this puts the logo image on the side
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        // color: '#333',
        marginTop: 35,
        color: 'white',
        letterSpacing: 1,
    }
})