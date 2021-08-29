import React from 'react';
import {List, TouchableRipple} from 'react-native-paper';
import filesManager from '../../mobx/filesManager';
import {ScaledSheet} from 'react-native-size-matters';
import {BLUE} from '../../styles/colors';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const File = ({fileURL, fileName, id, date}) => {
    const {navigate} = useNavigation();
    return (
        <TouchableRipple
            style={styles.file}
            onLongPress={() => {
                filesManager.deleteFile(fileName, id).then();
            }}
            onPress={() => filesManager.downloadFile(fileName, fileURL)}
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
                title={fileName}
                description={date}
                left={props => <List.Icon color={BLUE} icon="file" />}
                right={props => (
                    <IconButton
                        {...props}
                        icon="dots-vertical"
                        onPress={() => navigate('ContextMenu')}
                    />
                )}
            />
            {/*<Card.Title*/}
            {/*    titleStyle={styles.fileTitle}*/}
            {/*    title={fileName}*/}
            {/*    subtitle={date}*/}
            {/*    left={props => (*/}
            {/*        <Avatar.Icon*/}
            {/*            {...props}*/}
            {/*            icon="file"*/}
            {/*            style={{backgroundColor: BLUE}}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*    right={props => (*/}
            {/*        <IconButton*/}
            {/*            {...props}*/}
            {/*            icon="dots-vertical"*/}
            {/*            onPress={() => {}}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
        </TouchableRipple>
    );
};

const styles = ScaledSheet.create({
    fileTitle: {
        fontSize: '14@s',
        fontWeight: 'normal',
    },
});

export default File;
