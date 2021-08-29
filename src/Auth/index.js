import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {Button} from 'react-native-material-ui';

const Index = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput placeholder={'Email Address'} />
            <TextInput placeholder={'Password'} />
            {/*<Button primary raised text={'Sign in'} />*/}
        </View>
    );
};

export default Index;
