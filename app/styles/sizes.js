import {Dimensions, Platform, StatusBar} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
    Dimensions.get('screen');

export const STATUS_BAR_HEIGHT =
    Platform.OS === 'ios' ? 20 : StatusBar.currentHeight || 24;
