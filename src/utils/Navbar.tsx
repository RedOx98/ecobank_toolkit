/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface PressableProps {
    onPressHandler?: () => void;
    name?: string;
}

const Navbar: React.FC<PressableProps> = ({ name }) => {
    return (
        <View style={styles.body}>
            <View style={styles.nav_item1}>
                <View style={styles.icon}>
                <FontAwesome5 name={'user'} color={'#FFFFFF'} size={25} />
                </View>
                <Text style={styles.text1}>
                    Welcome {name ? name : 'Onimole'}
                </Text>
            </View>
            <View style={styles.nav_item2}>

                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#D9D9D9', radius: 60 }}
                style={styles.button}
                >
                    <View >
                <FontAwesome5 name={'arrow-right'} color={'#FFFFFF'} size={25} />
                </View>
                <Text style={styles.text2}>
                    Logout
                </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 411,
        height: 150,
        backgroundColor: '#23557F',
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 16,
        margin: -5,
        alignItems: 'center',
        fontFamily: 'NotoSans-Bold',
        marginTop: 40,
    },
    text2: {
        color: '#FFFFFF',
        fontSize: 16,
        margin: -5,
        alignItems: 'center',
        fontFamily: 'NotoSans-Bold',
        marginLeft: 5,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        width: 465,
        height: 65,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        borderWidth: 2,
        borderColor: '#23557F',
    },
    nav_item1: {
        display: 'flex',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -25,
    },
    nav_item2: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -4,
    },
    icon: {
        marginRight: 10,
        marginTop: 40,
    },
});

export default Navbar;

