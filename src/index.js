"use strict";
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import phoneList from './modules/phoneList';
import toggleMenu from './modules/toggleMenu';

phoneList();
toggleMenu();