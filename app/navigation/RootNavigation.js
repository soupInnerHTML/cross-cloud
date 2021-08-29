import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import {observer} from 'mobx-react-lite';
import auth from '../mobx/auth';
import {BACKGROUND} from '../styles/colors';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={auth.isLoggedIn ? 'Main' : 'Auth'}
                screenOptions={{
                    headerShown: false,
                    cardStyle: {backgroundColor: BACKGROUND},
                }}>
                <Stack.Screen name={'Auth'} component={AuthStack} />
                <Stack.Screen name={'Main'} component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default observer(RootNavigation);
