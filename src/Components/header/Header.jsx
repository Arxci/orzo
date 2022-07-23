import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { IconButton } from '@react-native-material/core';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Header() {
    const [open, setOpen] = useState(false);

  return (
    <View style={styles.header}>
        <SafeAreaView style={styles.nav}>
            <Text style={styles.logo}>Orzo</Text>
            <View style={styles.hamburger}>
                {
                    !open && (
                        <IconButton onPressOut={() => setOpen(!open)} color='rgb(166, 166, 166)' icon={props => <Icon name="menu" {...props} />}/>
                    )
                }
                {
                    open && (
                        <IconButton onPressOut={() => setOpen(!open)} color='rgb(166, 166, 166)' icon={props => <Icon name="close" {...props} />}/>
                    )
                }
            </View>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      height: 125,
      backgroundColor: 'rgb(69, 69, 69)',
    },

    nav: {
        flex: 1,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        flexDirection: 'row',
    },

    logo: {
        flex: 1,
        textAlignVertical: 'center',
        fontSize: 50,
        color: 'rgb(255, 82, 38)',
    },

    hamburger: {
        height: '100%',
        justifyContent: "center",
    }
  });
