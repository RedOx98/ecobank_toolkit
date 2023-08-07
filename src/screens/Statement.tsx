/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */

import React, { useEffect, useState } from 'react';
import {

    StyleSheet,
    Image,
    Text,
    View,
    Alert,
    ScrollView,
    Pressable,
    TextInput,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Navbar from '../utils/Navbar';
import Globalstyle from '../utils/Globalstyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../utils/CustomButton';




type RootStackParamList = {
    CustomerInfo: undefined
    ShortCodes: undefined
    Statement: undefined
};

type StatementNavigationProp = StackNavigationProp<RootStackParamList, 'Statement'>

type StatementProps = {
    navigation: StatementNavigationProp;
    route: RouteProp<RootStackParamList, 'Statement'>;
};

function Statement({ navigation, route }: StatementProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.body}>
            {/* <Image
                style={styles.logo}
                source={require('../../assets/Redux.png')}
            /> */}
            <Navbar/>
            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Statement</Text>

            <Text style={[styles.headerOutline, Globalstyle.CustomFontHeaderB]}>Time Frame</Text>

            <View style={styles.firstrow}>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#23557FB2', radius: 70 }}
                style={styles.button}
                >
                <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Last month
                </Text>
                </Pressable>
                </View>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#23557FB2', radius: 70 }}
                style={styles.button}
                >
                <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Last 2 months
                </Text>
                </Pressable>
                    </View>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#23557FB2', radius: 70 }}
                style={styles.button}
                >
                <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Filter
                </Text>
                </Pressable>
                    </View>
            </View>
            <View style={styles.secondrow}>
                <View style={styles.inputfield}>
                    <View style={styles.left}>
                    <TextInput
                placeholder="Start Date"
                style={[styles.input, Globalstyle.CustomFontH]} placeholderTextColor="#00000091"
                />
                </View>
                <View style={styles.right}>
                <FontAwesome5 name={'calendar'} color={'#23557F'} size={35} />
                </View>

                </View>
                <View style={styles.inputfield}>
                <View style={styles.left}>
                    <TextInput
                placeholder="End Date"
                style={[styles.input, Globalstyle.CustomFontH]} placeholderTextColor="#00000091"
                />
                </View>
                <View style={styles.right}>
                <FontAwesome5 name={'calendar'} color={'#23557F'} size={35} />
                </View>
                    </View>
            </View>
            <View style={styles.thirdrow}>
            <View>
            <View style={styles.lastinputfield}>
            <View style={styles.top}>
            <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Account Number
                </Text>
                </View>
                    <View style={styles.bottom}>
                    <TextInput
                placeholder=""
                style={[styles.input2, Globalstyle.CustomFontH]} placeholderTextColor="#00000091"
                />
                </View>

                </View>
                </View>
                <View>
                <View style={styles.lastinputfield}>
            <View style={styles.top2}>
            <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Email
                </Text>
                </View>
                    <View style={styles.bottom}>
                    <TextInput
                placeholder=""
                style={[styles.input2, Globalstyle.CustomFontH]} placeholderTextColor="#00000091"
                />
                </View>

                </View>
                    </View>
                <View>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#13CB47', radius: 135 }}
                style={styles.lastbutton}
                >
                <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Send Statement
                </Text>
                </Pressable>
                </View>
                </View>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        color: '#23557F',
        marginTop: 10,
        marginBottom: -11,
    },
    lastheader: {
        color: '#000000',
        marginTop: 10,
        marginBottom: -11,
        marginLeft: -105,
    },
    headerOutline: {
        color: '#000000',
        marginTop: 10,
        marginBottom: -11,
        marginLeft: -220,
    },
    left: {
        flex: 2,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textheader: {
        color: '#000000',
        marginTop: 18,
        marginBottom: -15,
    },
    top: {
        marginLeft: -160,
    },
    top2: {
        marginLeft: -290,
    },
    bottom: {
        marginLeft: -160,
        marginBottom: 50,
    },
    input: {
        width: 290,
        height: 65,
        borderRadius: 45,
        backgroundColor: '#D9D9D9',
        textAlign: 'left',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 65,
        color: '#000000',
    },
    input2: {
        width: 360,
        height: 65,
        borderRadius: 45,
        backgroundColor: '#D9D9D9',
        textAlign: 'left',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 135,
        color: '#000000',
    },
    firstrow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: -10,
    },
    secondrow: {
        display: 'flex',
        flexDirection: 'column',
    },
    thirdrow: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 100,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        width: 125,
        height: 60,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#D9D9D999',
        marginLeft: 5,
        marginRight: 4,
    },
    lastbutton: {
        display: 'flex',
        flexDirection: 'row',
        width: 345,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#23557FB2',
        marginLeft: 15,
        // marginRight: -35,
        marginBottom: 20,
    },
    text2: {
        color: '#000000',
        fontSize: 16,
        margin: -5,
        alignItems: 'center',
        fontFamily: 'NotoSans-Bold',
        marginLeft: 5,
        textAlign: 'auto',
    },
    inputfield: {
        width: 385,
        height: 65,
        borderRadius: 45,
        backgroundColor: '#D9D9D9',
        marginTop: 50,
        marginBottom: -40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lastinputfield: {
        width: 385,
        height: 65,
        borderRadius: 45,
        // backgroundColor: '#D9D9D9',
        marginTop: 5,
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Statement;