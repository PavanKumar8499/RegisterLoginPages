import { AppRegistry } from 'react-native';
import Main from './navigation/Navigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Main);
