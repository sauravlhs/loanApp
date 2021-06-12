import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';

import BusinessLoan from './BusinessLoan'
import HomeLoan from './HomeLoan'
import LoanAgainstProperty from './LoanAgainstProperty'


const Drawer = createDrawerNavigator();

const MainScreen = props => {
    
}

const styles = StyleSheet.create({})

export default createAppContainer(MainScreen)