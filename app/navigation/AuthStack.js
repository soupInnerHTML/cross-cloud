import React from 'react';
import SignIn from '../src/Auth/SignIn';
import SignUp from '../src/Auth/SignUp';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import {BACKGROUND} from '../styles/colors';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'SignIn'}
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                cardStyle: {backgroundColor: BACKGROUND},
            }}>
            <Stack.Screen name={'SignIn'} component={SignIn} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
        </Stack.Navigator>
    );
};

export default AuthStack;
