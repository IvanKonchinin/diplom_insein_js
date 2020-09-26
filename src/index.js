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
import formulaItemPopup from './modules/formulaItemPopup';
import repairTypesMenu from './modules/repairTypesMenu';
//import RepairTypesSlider from './modules/RepairTypesSlider';
//import startSliders from './modules/startSliders';
import repireSliderMobile from './modules/repireSliderMobile';
import portfolioSliderDesctop from './modules/portfolioSliderDesctop';
import portfolioSliderMobile from './modules/portfolioSliderMobile';
import popupPortfolio from './modules/popupPortfolio';
import popupPortfolioSlider from './modules/popupPortfolioSlider';
import transparencySlider from './modules/transparencySlider';

import {RepairTypesSlider, startSliders} from './modules/repairTypesSlider';

phoneList();
toggleMenu();
popupRepairTypesModal();
maskPhone('input[name="phone"]', '+7(___) ___-__-__');
policyPrivacy();
repairTypesMenu();
startSliders();
repireSliderMobile();
portfolioSliderDesctop();
portfolioSliderMobile();
popupPortfolio();
popupPortfolioSlider();
transparencySlider();


