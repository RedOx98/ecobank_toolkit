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
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Navbar from '../utils/Navbar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Globalstyle from '../utils/Globalstyle';



type RootStackParamList = {
    CustomerInfo: undefined
    ShortCodes: undefined
    Statement: undefined
};

type ShortCodesNavigationProp = StackNavigationProp<RootStackParamList, 'ShortCodes'>

type ShortCodesProps = {
    navigation: ShortCodesNavigationProp;
    route: RouteProp<RootStackParamList, 'ShortCodes'>;
};

function ShortCodes({ navigation, route }: ShortCodesProps): JSX.Element {


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
            <Text>SHORT CODES PAGE</Text>
            <View style={styles.codes_body}>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    USSD Menu - *326#
                </Text>
                </View>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    Airtime Quick Recharge - *326*Amount#
                </Text>
                </View>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    Third Party Airtime Recharge - *326*Amount*Phone Number#
                </Text>
                </View>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    Balance Checking - *326*0#
                </Text>
                </View>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    NIP Transfer Domestic Quick String - *326*Amount*Acct Number#
                </Text>
                </View>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    Interbank Transfer - *326*2*Amount*Beneficiary Acct No#
                </Text>
                </View>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    Express Cash E-token Generation - *326*7*Amount*1#
                </Text>
                </View>
                <View style={styles.code_item}>
                <FontAwesome5 name={'hand-point-right'} color={'#23557F'} size={10}/>
                <Text style={[styles.text, Globalstyle.CustomFontHighlight]}>
                    BVN - *565*0#
                </Text>
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
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    codes_body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 333,
        height: 500,
        marginLeft: 40,
    },
    code_item: {
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    text: {
        color: '#000000',
        marginLeft: 10,
    },
});

export default ShortCodes;