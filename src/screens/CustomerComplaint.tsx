/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */

import React, { useEffect, useState } from 'react';
import {

    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    Alert,
    TextInput,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Navbar from '../utils/Navbar';
import Globalstyle from '../utils/Globalstyle';
import CustomButton from '../utils/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



type RootStackParamList = {
    CustomerComplaint: undefined
};

type CustomerComplaintNavigationProp = StackNavigationProp<RootStackParamList, 'CustomerComplaint'>

type CustomerComplaintProps = {
    navigation: CustomerComplaintNavigationProp;
    route: RouteProp<RootStackParamList, 'CustomerComplaint'>;
};

function CustomerComplaint({ navigation, route }: CustomerComplaintProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Navbar/>
            <View style={styles.body}>
                <Text style={[styles.header, Globalstyle.CustomFontHeader]}>Log Customer Complaints</Text>
            <View style={styles.top}>
            <View>
                <Text style={[styles.text, Globalstyle.CustomFontComplaintT]}>To file a complaint or request, please provide us with the following information:</Text>
            </View>
            <View>
            <View style={styles.inputfield}>
                <View style={styles.left}>
                    <Text style={[styles.textheader, Globalstyle.CustomFontComplaintT]}>Your name</Text>
                </View>
                <View style={styles.right}>
                <TextInput
                placeholder="e.g olahammed"
                style={[styles.input, Globalstyle.CustomFontInput]} placeholderTextColor="#23557F"
                />
                </View>
            </View>
            </View>
            <View>
            <View style={styles.inputfield}>
                <View style={styles.left}>
                    <Text style={[styles.textheader, Globalstyle.CustomFontComplaintT]}>Your email address</Text>
                </View>
                <View style={styles.right}>
                <TextInput
                placeholder="e.g olahammed@ecobank.com"
                style={[styles.input, Globalstyle.CustomFontInput]} placeholderTextColor="#23557F"
                />
                </View>
            </View>
            <View>
            <View style={styles.inputfield}>
                <View style={styles.left}>
                    <Text style={[styles.textheader, Globalstyle.CustomFontComplaintT]}>Your Phone number</Text>
                </View>
                <View style={styles.right}>
                <TextInput
                placeholder="e.g 090000000000"
                style={[styles.input, Globalstyle.CustomFontInput]}
                placeholderTextColor="#23557F"
                keyboardType="number-pad"
                />
                </View>
            </View>
            <View>
            <View style={styles.inputfield}>
                <View style={styles.left}>
                    <Text style={[styles.textheader, Globalstyle.CustomFontComplaintT]}>Enter a brief description of the complaint</Text>
                </View>
                <View style={styles.right}>
                <TextInput
                placeholder="Describe complaint"
                multiline={true}
                numberOfLines={5}
                style={[styles.inputdesc, Globalstyle.CustomFontInput]} placeholderTextColor="#23557F"
                />
                </View>
            </View>
            </View>
            </View>
            </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomleft}><Text style={[styles.textheader, Globalstyle.CustomFontComplaintT]}>Any relevant screenshots or files</Text></View>
                <View style={styles.pressable}>
                    <View style={styles.iconpress}>
                        <FontAwesome5 name={'file'} color={'#000000'} size={35} />
                        </View>
                    <CustomButton title="Browse" color="rgba(35, 85, 127, 0.7)" style={styles.pressbutton}/>
                </View>
            </View>
            <View style={styles.bottomlast}>
                <View style={styles.bottomleft}><Text style={[styles.lastheader, Globalstyle.CustomFontComplaintT]}>If you have any further questions, please do not hesitate to contact the support team.</Text></View>
                <View style={styles.lastbutton}>
                <CustomButton title="Submit" color="#23557F" style={styles.pressbuttonL}/>
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
    text: {
        color: '#000000',
        marginTop: 18,
        fontSize: 20,
        marginBottom: 20,
    },
    textheader: {
        color: '#000000',
        marginTop: 18,
        marginBottom: -15,
    },
    lastheader: {
        color: '#000000',
        marginTop: 18,
        marginBottom: -15,
        marginLeft: -90,
    },
    input: {
        width: 250,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 55,
        color: '#000000',
    },
    inputdesc: {
        width: 250,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 55,
        color: '#000000',
        // height: 50,
    },
    right: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        flex: 1,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#23557F',
        marginTop: 10,
        fontSize: 20,
        marginBottom: -11,
    },
    top: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        marginTop: -15,
        marginLeft: -105,
    },
    inputfield: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -49,
        marginBottom: 4,
    },
    bottomitem: {
        display: 'flex',
        flexDirection: 'column',
    },
    pressable: {
        // borderWidth: 2,
        width: 280,
        height: 67,
        marginTop: 35,
        backgroundColor: 'rgba(35, 85, 127, 0.7)',
        borderRadius: 50,
        marginLeft: 185,
    },
    pressbutton: {
        borderColor: 'none',
        borderWidth: 0,
        borderRadius: 40,
        marginTop: -58,
        marginLeft: 52,
        marginBottom: 10,
        color: '#000000',
    },
    pressbuttonL: {
        borderColor: 'none',
        borderWidth: 0,
        borderRadius: 40,
        marginTop: -80,
        marginLeft: 52,
        // marginBottom: 40,
        color: '#000000',
    },
    iconpress: {
        marginLeft: 15,
        marginTop: 20,
    },
    bottomleft: {
        marginLeft: 100,
    },
    bottomlast: {
        display: 'flex',
        flexDirection: 'column',
    },
    lastbutton: {
        marginTop: 130,
        marginLeft: 45,
    },
});

export default CustomerComplaint;