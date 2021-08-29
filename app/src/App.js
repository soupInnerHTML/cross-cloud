import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigation from '../navigation/RootNavigation';

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />
            <RootNavigation />
        </SafeAreaView>
    );
};

export default App;
