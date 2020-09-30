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
       if (i !== 0){
         item.classList.add('hide')
       }else{
          item.classList.add('show')
       };
     });
  }

  
 

  toggleTabContent(index, tabs){
    for (let i = 0; i < this.tabContent.length; i++) {
      if (index === i) {
        tabs[i].classList.add('preview_active');
        this.tabContent[i].classList.add('show');
        this.tabContent[i].classList.remove('hide');
      } else {
        tabs[i].classList.remove('preview_active');
        this.tabContent[i].classList.add('hide');
        this.tabContent[i].classList.remove('show');
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
     window.addEventListener('resize', ()=> {
        if (window.innerWidth > 1024){
          [...this.tabContent].forEach((item, i) => {
            if (item.classList.contains('hide')) {
              item.classList.remove('hide');
              item.classList.add('show');

            } else {
              item.classList.add('hide');
              item.classList.remove('show')
            };
          });
        }
     });
  }

}

export default DisainSliderPaginationProto;