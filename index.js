/**
 * @format
 */

import {connectToDevTools} from 'react-devtools-core';

connectToDevTools({
  host: 'localhost',
  port: 1234,
});


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Flexbox from './Flexbox';
import Exercise4 from './Exercise4';
import Exercise5 from './Exercise5';
import Exercise6 from './Exercise6';
import RestAPI from './RestApi';
import Exercise7 from './Exercise7';

AppRegistry.registerComponent(appName, () => Exercise7);
