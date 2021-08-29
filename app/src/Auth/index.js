import React, {useMemo, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {BLUE} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';

const Auth = ({type, accentColor, authAction}) => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitDisabledOnAuth, setIsSubmitDisabled] = useState(false);

    const isSubmitDisabled = useMemo(
        () => !email || !password || isSubmitDisabledOnAuth,
        [email, password, isSubmitDisabledOnAuth],
    );

    return (
        <View style={styles.container}>
            <TextInput
                mode={'outlined'}
                label={'Email Address'}
                style={styles.offset}
                onChangeText={setEmail}
            />
            <TextInput
                secureTextEntry={true}
                mode={'outlined'}
                label={'Password'}
                style={styles.offset}
                onChangeText={setPassword}
            />
            <View style={styles.authButton}>
                <Button
                    disabled={isSubmitDisabled}
                    color={accentColor}
                    mode="contained"
                    onPress={() => {
                        setIsSubmitDisabled(true);
                        authAction({email, password})
                            .then(() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{name: 'Main'}],
                                });
                            })
                            .catch(e => Alert.alert(e.toString()))
                            .finally(() => setIsSubmitDisabled(false));
                    }}>
                    {type}
                </Button>

                <Button
                    style={styles.offset}
                    color={'#fff'}
                    mode="contained"
                    onPress={() => console.log('Pressed')}>
                    Google sign in
                </Button>

                <Text
                    style={[styles.link, styles.offset]}
                    onPress={() =>
                        navigation.navigate(
                            type === 'Sign in' ? 'SignUp' : 'SignIn',
                        )
                    }>
                    Already have an account? {type}
                </Text>
            </View>
        </View>
    );
};

export default Auth;

const styles = ScaledSheet.create({
    authButton: {
        position: 'absolute',
        bottom: '40@vs',
        width: '100%',
    },
    link: {
        textAlign: 'center',
        color: BLUE,
        marginTop: '16@vs',
    },
    offset: {
        marginTop: '16@vs',
    },
    container: {
        flex: 1,
        paddingHorizontal: '16@s',
    },
});
