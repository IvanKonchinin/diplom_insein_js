class DisainSliderPaginationProto{
  constructor(wrap, styleDesign){
    this.tabHeader = document.querySelector('#designs');
    this.wrap = document.querySelector(wrap)
    this.tabContent = this.wrap.querySelectorAll('.designs-slider__style-slide');
    this.styleDesign = styleDesign;
  }
  
  init(){
    this.setDisplay();
    this.eventListener();
  }

  setDisplay(){
     [...this.tabContent].forEach((item, i) => {
       if (i !== 0) item.style.display = 'none';
     });
  }
 

  toggleTabContent(index, tabs){
    for (let i = 0; i < this.tabContent.length; i++) {
      if (index === i) {
        tabs[i].classList.add('preview_active');
        this.tabContent[i].style.display = '';
      } else {
        tabs[i].classList.remove('preview_active');
        this.tabContent[i].style.display = 'none';
      }
    }
  }

  eventListener(){
     this.tabHeader.addEventListener('click', (e) => {

       const tab = document.querySelectorAll('.visible .preview-block__item-inner');
       let target = e.target;
       target = target.closest(this.styleDesign);

       if (target && target.closest('.visible')) {
         tab.forEach((item, i) => {
           if (item === target) {
             this.toggleTabContent(i, tab);
           }
         })
       }
     });
  }

}

export default DisainSliderPaginationProto;