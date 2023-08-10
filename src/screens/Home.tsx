/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
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
    Pressable,
    Modal,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp, Link } from '@react-navigation/native';
import Navbar from '../utils/Navbar';
import Globalstyle from '../utils/Globalstyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';



type RootStackParamList = {
    Home: undefined
    Login: undefined
    CustomerInfo: undefined
    ServicePage: undefined
    Statement: undefined
    ShortCodes: undefined
    CustomerComplaint: undefined
};

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeProps = {
    navigation: HomeNavigationProp;
    route: RouteProp<RootStackParamList, 'Home'>;
};

function Home({ navigation, route }: HomeProps): JSX.Element {

    const onPress = ()=> {
        navigation.navigate('CustomerInfo');
    };

    const gotoComplaint = () => {
        navigation.navigate('CustomerComplaint');
    };

    const [showModal, setShowModal] = useState<boolean>(false);
    const [display, setDisplay] = useState<boolean>(false);

    const onPressHandler = () => {
        setShowModal(true);
    };
    const onPresser = ()=> {
        setDisplay(true);
    };


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <View style={styles.body}>
            <Navbar name="OOnimole" />
            <Modal
                visible={showModal}
                transparent
                animationType="slide"
                onRequestClose={()=> {
                    setShowModal(false);
                }}
            >
                <View style={styles.centered}>
                <View style={styles.modal}>
                    {/* <Text style={{color:'white'}}>Displaying the Modal</Text> */}
                    <TextInput placeholder="Enter Name" placeholderTextColor={'#23557F'} style={[styles.input, Globalstyle.CustomFontInput]}/>
                    <TextInput placeholder="Enter Acct No." placeholderTextColor={'#23557F'} style={[styles.input, Globalstyle.CustomFontInput]}/>
                    <TextInput placeholder="Enter Phone No." placeholderTextColor={'#23557F'} style={[styles.input, Globalstyle.CustomFontInput]}/>
                    <TextInput placeholder="Enter Email Address" placeholderTextColor={'#23557F'} style={[styles.input, Globalstyle.CustomFontInput]}/>
                    <TextInput placeholder="Enter BVN" placeholderTextColor={'#23557F'} style={[styles.input, Globalstyle.CustomFontInput]}/>
                    <CustomButton title='Search' color='#23557F' style={[styles.button]} onPressHandler={onPress}/>
                </View>
                </View>
            </Modal>

            <Modal
                visible={display}
                transparent
                animationType="slide"
                onRequestClose={()=> {
                    setDisplay(false);
                }}
            >
                <View style={styles.centered1}>
                <View style={styles.modal}>
                    {/* <Text style={{color:'white'}}>Displaying the Modal</Text> */}
                    {/* <TextInput placeholder="Enter Name" placeholderTextColor={'#23557F'} style={[styles.input, Globalstyle.CustomFontInput]}/>
                    <TextInput placeholder="Enter Acct No." placeholderTextColor={'#23557F'} style={[styles.input, Globalstyle.CustomFontInput]}/> */}
                    {/* <CustomButton title='Search' color='#23557F' style={[styles.button]} onPressHandler={onPress}/> */}
                    <View>
                    <Pressable
                    hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                    android_ripple={{ color: '#D9D9D9', radius: 90 }}
                    style={[styles.pressable]}
                    >
                        <View style={styles.bot_view}>
                            <Link to={'/Statement'}>
                            <Text style={[styles.text, Globalstyle.CustomFontHighlight]}> Send Statement</Text></Link>
                        </View>
                    </Pressable>
                    </View>
                    <View>
                    <Pressable
                    hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                    android_ripple={{ color: '#D9D9D9', radius: 90 }}
                    style={styles.pressable}
                    >
                        <View style={styles.bot_view}>
                            <Link to={'/ShortCodes'}>
                            <Text style={[styles.text, Globalstyle.CustomFontHighlight]}> Short Codes </Text>
                            </Link>
                        </View>
                    </Pressable>
                    </View>

                </View>
                </View>
            </Modal>

            <View style={styles.item_body}>
                <Pressable
                    hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                    android_ripple={{ color: 'rgba(35, 85, 127, 0.5)', radius: 200 }}
                    onPress={onPressHandler}
                // style={styles.button}
                >
                    <View style={styles.item1}>
                        <Text style={[styles.text, Globalstyle.CustomFontH]}>Customer Info</Text>
                        <View >
                            <FontAwesome5 name={'caret-down'} color={'#000000'} size={25} />
                        </View>
                    </View>
                </Pressable>
                <Pressable
                    hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                    android_ripple={{ color: 'rgba(35, 85, 127, 0.5)', radius: 200 }}
                    onPress={onPresser}
                // style={styles.button}
                >
                    <View style={styles.item2}>
                        <Text style={[styles.text1, Globalstyle.CustomFontH]}>Quick Link</Text>
                        <View >
                            <FontAwesome5 name={'caret-down'} color={'#000000'} size={25} />
                        </View>
                    </View>
                </Pressable>
                <Pressable
                    hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                    android_ripple={{ color: 'rgba(35, 85, 127, 0.5)', radius: 200 }}
                // style={styles.button}
                >
                    <View style={styles.item3}>
                        <Text
                        onPress={gotoComplaint}
                        style={[styles.text3, Globalstyle.CustomFontH]}>Log Customer Complaint</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

/**
 * The top nav should have welcome USER and logout with logout icon.
 * The bottom nav should have four distinct navigation symbols linking to four direct pages for the USER quick access
 *
 *
 * The following input parameters list should appear on clicking the Quick Link button
 * Send Statement Button and on clicking this takes the user to the Send statement page.
 * Bank Short Codes Button and on clicking this takes the user to the Short Codes page.
 *
 * On clicking the Log Customer Complaint Button it should take the user to the Log Complaint page.
 *
 *
 * The following input parameters should appear on clicking the Customer Info button
 *BVN
 *Name
 *Account Number
 *Phone No.
 *Email Address
 *And finally A SEARCH button speaking the API
 */


const styles = StyleSheet.create({
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        // position: 'relative',
    },
    item_body: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 100,
    },
    text: {
        color: '#23557F',
        // marginLeft:
    },
    text1: {
        color: '#23557F',
        fontSize: 15,
        marginLeft: -30,
    },
    text3: {
        color: '#23557F',
        fontSize: 15,
        marginLeft: -3,
    },
    item1: {
        display: 'flex',
        flexDirection: 'row',
        width: 230,
        height: 50,
        backgroundColor: '#D9D9D9',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 40,
    },
    item2: {
        display: 'flex',
        flexDirection: 'row',
        width: 260,
        height: 50,
        backgroundColor: '#D9D9D9',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 40,
    },
    item3: {
        width: 295,
        height: 50,
        backgroundColor: '#D9D9D9',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        width: 210,
        height: 336,
        padding: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // gap: 10,
        // position: 'absolute',
        // top: 250,
        // bottom: 0,
        // // left: 10,
        // right: 40,
    },
    centered: {
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: 209,
        height: 395,
        padding: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
        gap: 10,
        backgroundColor: '#23557F',
        position: 'absolute',
        top: 336,
        bottom: 0,
        borderRadius: 10,
        // left: 10,
        right: 14,
        borderWidth: 3,
        borderColor: '#D9D9D999',
        shadowColor: '0px 4px 12px 0px rgba(131, 136, 157, 0.16)',
    },
    centered1: {
        display: 'flex',
        flexDirection: 'column',
        width: 209,
        height: 156,
        padding: 5,
        gap: 10,
        backgroundColor: '#23557F',
        position: 'absolute',
        top: 425,
        bottom: 0,
        borderRadius: 10,
        // left: 10,
        right: 14,
        borderWidth: 3,
        borderColor: '#D9D9D999',
        shadowColor: '0px 4px 12px 0px rgba(131, 136, 157, 0.16)',
    },
    input: {
        width: 190,
        height: 60,
        padding: 12,
        borderRadius: 4,
        color: '#23557F',
        borderColor: '#FFFFFF',
        borderWidth: 0.5,
        marginRight: 15,
        marginTop: 5,
        backgroundColor: '#FFFFFF',
    },
    button: {
        width: 140,
        height: 45,
        borderRadius: 10,
        position: 'absolute',
        top: 295,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        // color: '#FFFFFF',
    },
    pressable: {
        width: 179,
        height: 50,
        padding: 12,
        borderWidth: 3,
        marginTop: 10,
        marginRight: 15,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottext: {
        fontSize: 16,
    },
    bot_view: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;