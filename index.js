/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppXX from './src/navigation/MainNavigator'

AppRegistry.registerComponent(appName, () => AppXX);
