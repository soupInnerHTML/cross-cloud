import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import filesManager from '../../mobx/filesManager';
import {observer} from 'mobx-react-lite';
import auth from '../../mobx/auth';
import File from './File';
import {FAB} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';
import {RED} from '../../styles/colors';

const Main = () => {
    useEffect(() => {
        auth.uid && filesManager.observeStorageData().then();
    }, [auth.uid]);
    return (
        <>
            <FlatList
                data={filesManager.data}
                renderItem={({item}) => <File {...item} key={item.id} />}
            />

            <View style={styles.fabContainer}>
                <FAB
                    color={'#fff'}
                    style={styles.fab}
                    icon="cloud-upload"
                    onPress={filesManager.uploadFiles}
                />
            </View>
        </>
    );
};

const styles = ScaledSheet.create({
    fab: {
        backgroundColor: RED,
    },
    fabContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: '16@vs',
        right: 0,
        left: 0,
    },
});

export default observer(Main);
