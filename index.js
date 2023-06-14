/**
 * @format
 */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SearchLocation from './Components/BottomTab/Screens/SearchLocation';
AppRegistry.registerComponent(appName, () => App);
