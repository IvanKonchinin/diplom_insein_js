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
import popupTransparency from './modules/popupTransparency';
import popupTransparencySlider from './modules/popupTransparencySlider';
import startProblemsPopup from './modules/startProblemsPopup';
import tabs from './modules/disainTabs';
import disainSliderMobile from './modules/disainSliderTabsMobile';
import DisainSliderPaginationProto from './modules/disainSliderPaginationProto';
import popupDesign from './modules/popupDesign';
import disainPopupTabs from './modules/disainPopupTabs';
import popupDesignSlider from './modules/popupDesignSlider';
import PopupDesignSlider from './modules/popupDesignSliderClass';
import popupConsultation from './modules/popupConsultation';
import testimonialsSlider from './modules/testimonialsSlider';

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
popupTransparency();
popupTransparencySlider();
startProblemsPopup();
tabs();
disainSliderMobile();
popupDesign();
disainPopupTabs();
popupConsultation();
testimonialsSlider();

const newDisainSlider1 = new DisainSliderPaginationProto('.designs-slider__style1', '.scand');
const newDisainSlider2 = new DisainSliderPaginationProto('.designs-slider__style2', '.trad');
const newDisainSlider3 = new DisainSliderPaginationProto('.designs-slider__style3', '.loft');
const newDisainSlider4 = new DisainSliderPaginationProto('.designs-slider__style4', '.minimal');
const newDisainSlider5 = new DisainSliderPaginationProto('.designs-slider__style5', '.modern');
newDisainSlider1.init();
newDisainSlider2.init();
newDisainSlider3.init();
newDisainSlider4.init();
newDisainSlider5.init();

const newPopupDesignSlider1 = new PopupDesignSlider('.popup-designs-slider__style1');
const newPopupDesignSlider2 = new PopupDesignSlider('.popup-designs-slider__style2');
const newPopupDesignSlider3 = new PopupDesignSlider('.popup-designs-slider__style3');
const newPopupDesignSlider4 = new PopupDesignSlider('.popup-designs-slider__style4');
const newPopupDesignSlider5 = new PopupDesignSlider('.popup-designs-slider__style5');
newPopupDesignSlider1.init();
newPopupDesignSlider2.init();
newPopupDesignSlider3.init();
newPopupDesignSlider4.init();
newPopupDesignSlider5.init();



