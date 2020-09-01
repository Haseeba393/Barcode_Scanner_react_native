import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing screen
import { Splash, Scan, Result } from '../screens'

//making root stack variable
const RootStack = createStackNavigator();

function RootNavigator(){
    return(
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='splash'
                headerMode='none'>
                <RootStack.Screen
                    name='splash'
                    component={Splash}
                />
                <RootStack.Screen
                    name='scan'
                    component={Scan}
                />
                <RootStack.Screen
                    name='result'
                    component={Result}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;