/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface PressableProps {
    onPressHandler?: () => void;
    title: string;
    color: string;
    style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<PressableProps> = ({ onPressHandler, title, color, style }) => {
    return (
        <Pressable
            onPress={onPressHandler}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#23557F' }}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#23557F' : color,
                },
                styles.button,
                style,
            ]}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 25,
        // fontStyle: 'italic',
        // fontWeight: 'bold',
        margin: -5,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'NotoSans-Bold',
    },
    button: {
        width: 227,
        height: 65,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        // backgroundColor: '#23557F',
        borderWidth: 2,
    },
});

export default CustomButton;

