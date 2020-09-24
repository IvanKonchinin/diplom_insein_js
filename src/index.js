"use strict";
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import phoneList from './modules/phoneList';
import toggleMenu from './modules/toggleMenu';
import popupRepairTypesModal from './modules/popupRepairTypesModal';
import maskPhone from './modules/maskPhone';
import policyPrivacy from './modules/policyPrivacy';

phoneList();
toggleMenu();
popupRepairTypesModal();
maskPhone('input[name="phone"]', '+7(___) ___-__-__');
policyPrivacy();