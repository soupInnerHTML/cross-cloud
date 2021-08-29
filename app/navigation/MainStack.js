import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import {BACKGROUND} from '../styles/colors';
import Main from '../src/Main';
import ContextMenu from '../src/Main/ContextMenu';
import {View} from 'react-native';
import {SCREEN_HEIGHT} from '../styles/sizes';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'FileList'}
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                cardStyle: {backgroundColor: BACKGROUND},
            }}>
            <Stack.Screen name={'FileList'} component={Main} />
            <Stack.Screen
                name={'ContextMenu'}
                component={ContextMenu}
                options={{
                    gestureEnabled: true,
                    gestureResponseDistance: SCREEN_HEIGHT,
                    gestureDirection: 'vertical',
                    cardStyleInterpolator:
                        CardStyleInterpolators.forVerticalIOS,
                    detachPreviousScreen: false,
                    cardStyle: {
                        backgroundColor: 'transparent',
                    },
                    transitionSpec: {
                        open: {
                            animation: 'timing',
                            config: {
                                duration: 500,
                            },
                        },
                        close: {
                            animation: 'timing',
                            config: {
                                duration: 500,
                            },
                        },
                    },
                    cardOverlayEnabled: true,
                    cardOverlay: () => (
                        <View
                            style={{
                                backgroundColor: 'rgba(0,0,0, 0.5)',
                                flex: 1,
                            }}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
