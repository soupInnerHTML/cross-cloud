/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/src/App';
import {name as appName} from './app.json';
import {configure} from 'mobx';

configure({
    enforceActions: 'never',
});

AppRegistry.registerComponent(appName, () => App);
