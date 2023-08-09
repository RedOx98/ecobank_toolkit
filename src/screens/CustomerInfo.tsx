/* eslint-disable prettier/prettier */

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



type RootStackParamList = {
    CustomerInfo: undefined
    ShortCodes: undefined
    Statement: undefined
};

type CustomerInfoNavigationProp = StackNavigationProp<RootStackParamList, 'CustomerInfo'>

type CustomerInfoProps = {
    navigation: CustomerInfoNavigationProp;
    route: RouteProp<RootStackParamList, 'CustomerInfo'>;
};

function CustomerInfo({ navigation, route }: CustomerInfoProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Navbar />
            <ScrollView
                style={styles.horizontal}
                horizontal
            >
                <View style={styles.horizontal_body}>
                    <View style={styles.scroll_image}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/ecos.png')}
                        />
                    </View>
                    <View style={styles.customerinfo}>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. Name: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> O Onimole</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 123456789</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 123233</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct. Type: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> Current</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Tier: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.customerinfo}>
                    <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. Name: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> O Hammed</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 123456789</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. No: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 123233</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct Type: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> Current</Text>
                            </View>
                        </View>
                        <View style={styles.customertext}>
                            <View style={styles.left}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Tier: </Text>
                            </View>
                            <View style={styles.right}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 3</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.body}>
                {/* <Image
                style={styles.logo}
                source={require('../../assets/Redux.png')}
            /> */}
                <Text>CUSTOMER INFORMATION PAGE</Text>
                <View style={styles.customerinfomid}>
                    <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Email: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> Ola******@e*******.com</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct No: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 123456789</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Cust. No: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 123233</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Acct Type: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> Current</Text>
                            </View>
                        </View>
                        <View style={styles.customertextmid}>
                            <View style={styles.leftmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}>Tier: </Text>
                            </View>
                            <View style={styles.rightmid}>
                            <Text style={[styles.header, Globalstyle.CustomFontHeaderB]}> 3</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.customerinfobottom}>
                    <View style={styles.thirdrow}>
                <View style={styles.bottoms}>
                <Pressable
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#13CB47', radius: 135 }}
                style={styles.lastbutton3}
                >
                <Text style={[styles.text2, Globalstyle.CustomFontHeader]}>
                    Lien Details
                </Text>
                </Pressable>
                </View>
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
    horizontal: {
        width: 420,
        height: 400,
        flex: 0.5,
        // borderWidth: 2,
        marginTop: -70,
        display: 'flex',
        // alignItems: 'center'
    },
    horizontal_body: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // gap: 15,
        // borderWidth: 0.5,
        // flex: 1,
        // width: 415,
        // marginLeft: 10,
        marginTop: -100,
    },
    header: {
        color: '#23557F',
        marginTop: 10,
        marginBottom: -11,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF99',
        width: 411,
        marginTop: -15,
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
        marginTop: 1,
        marginBottom: 10,
        objectFit: 'cover',
        borderRadius: 20,
    },
    bottoms: {
        marginTop: -50,
        marginRight: 65,
        display: 'flex',
        flexDirection: 'column',
    },
    scroll_image: {
        flex: 0.1,
        marginRight: 30,
        // backgroundColor: '#D9D9D999',
        borderRadius: 20,
        marginLeft: 20,
        height: 100,
        marginTop: -50,
    },
    customerinfo: {
        flex: 3,
        width: 350,
        height: 285,
        // borderWidth: 2,
        marginRight: 10,
        marginTop: 145,
        borderRadius: 10,
        backgroundColor: '#D9D9D990',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
    },
    customerinfomid: {
        flex: 3,
        width: 390,
        height: 285,
        // borderWidth: 2,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#D9D9D999',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
    },
    customerinfobottom: {
        flex: 3,
        width: 360,
        height: 285,
        borderWidth: 2,
        marginLeft: 50,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 10,
        marginRight: 20,
        // backgroundColor: '#D9D9D999',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    customertext: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 2,
        marginTop: 15,
        // marginBottom: 0,
        height: 60,
        // marginTop: 5,
        marginLeft: 10,
    },
    customertextmid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 2,
        marginTop: 40,
        // marginBottom: 0,
        height: 60,
        // marginTop: 5,
        marginLeft: 10,
    },
    aligntext: {
        display: 'flex',
        flexDirection: 'row',
    },
    right: {
        flex: 1.5,
        marginTop: -45,
        marginRight: 5,
    },
    left: {
        flex: 2,
        marginTop: -45,
    },
    rightmid: {
        flex: 3,
        marginTop: -45,
        marginRight: 5,
        width: 380,
    },
    leftmid: {
        flex: 2,
        marginTop: -45,
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
    text2: {
        color: '#000000',
        fontSize: 16,
        margin: -5,
        alignItems: 'center',
        fontFamily: 'NotoSans-Bold',
        marginLeft: 5,
        textAlign: 'auto',
    },
    lastbutton1: {
        display: 'flex',
        flexDirection: 'row',
        width: 345,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        backgroundColor: '#23557FB2',
        marginLeft: 55,
        // marginRight: -35,
        // marginBottom: 65,
    },
    lastbutton2: {
        display: 'flex',
        flexDirection: 'row',
        width: 345,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -35,
        backgroundColor: '#23557FB2',
        marginLeft: 55,
        // marginRight: -35,
        // marginBottom: 40,
    },
    lastbutton3: {
        display: 'flex',
        flexDirection: 'row',
        width: 345,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -75,
        backgroundColor: '#23557FB2',
        marginLeft: -34,
        // marginRight: -35,
        marginBottom: 40,
    },
    lastbutton4: {
        display: 'flex',
        flexDirection: 'row',
        width: 345,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -35,
        backgroundColor: '#23557FB2',
        marginLeft: 55,
        // marginRight: -35,
        // marginBottom: 40,
    },
    lastbutton5: {
        display: 'flex',
        flexDirection: 'row',
        width: 345,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -35,
        backgroundColor: '#23557FB2',
        marginLeft: 55,
        // marginRight: -35,
        // marginBottom: 40,
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
    bottom: {
        marginLeft: -160,
        marginBottom: 50,
    },
    top: {
        marginLeft: -160,
    },
    top2: {
        marginLeft: -290,
    },
});

export default CustomerInfo;