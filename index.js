// https://github.com/kmagiera/react-native-gesture-handler/issues/746
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
