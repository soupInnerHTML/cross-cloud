import React from 'react';
import {Pressable, View} from 'react-native';
import {List, TouchableRipple} from 'react-native-paper';
import {ScaledSheet} from 'react-native-size-matters';

const actions = [
    {
        title: 'Download',
        icon: 'download',
        onPress: () => {},
    },
    {
        title: 'Delete',
        icon: 'delete',
        onPress: () => {},
    },
    {
        title: 'Rename',
        icon: 'rename-box',
        onPress: () => {},
    },
];

const ContextMenu = ({navigation}) => {
    return (
        <Pressable
            style={styles.container}
            onPress={() => setTimeout(() => navigation.goBack())}>
            <View style={styles.actionWrapper}>
                {actions.map((action, index) => (
                    <View
                        key={index}
                        style={{
                            borderTopEndRadius: index || 20,
                            borderTopStartRadius: index || 20,
                            overflow: 'hidden',
                        }}>
                        <TouchableRipple
                            style={[
                                styles.action,
                                {
                                    borderTopEndRadius: index || 20,
                                    borderTopStartRadius: index || 20,
                                },
                            ]}
                            onPress={() => action.onPress}
                            rippleColor="rgba(0, 0, 0, .32)">
                            <List.Item
                                style={{padding: 0}}
                                title={action.title}
                                left={props => {
                                    return (
                                        <List.Icon
                                            {...props}
                                            style={{marginRight: 0}}
                                            icon={action.icon}
                                        />
                                    );
                                }}
                            />
                        </TouchableRipple>
                    </View>
                ))}
            </View>
        </Pressable>
    );
};

const styles = ScaledSheet.create({
    actionWrapper: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },
    action: {
        // paddingHorizontal: '5@s',
    },
    container: {
        flex: 1,
    },
});

export default ContextMenu;
