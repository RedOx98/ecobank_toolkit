/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App fro./src/utils/AppApp';
import {name as appName} from './app.json';
import App from './src/utils/App';

AppRegistry.registerComponent(appName, () => App);
