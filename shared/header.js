import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View styles={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}><Text style={styles.headerText}><Image source={require('../assets/heart_logo.png')}  style={styles.headerImage}/> {title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        textAlign: 'center'
        
    },
    icon: {
        position: 'absolute',
        zIndex: 1
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 10,
        marginHorizontal: 10
    },
})