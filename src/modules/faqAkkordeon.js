const faqAkkordeon = () => {
  const accordeonWrap = document.querySelector('.faq .accordion');
  const accordeonitems = accordeonWrap.querySelectorAll('.title_block');

  const toggleAccordeonContent = (index) => {
    for (let i = 0; i < accordeonitems.length; i++) {
      if (index === i) {
        accordeonitems[i].classList.add('msg-active');
      } else {
        accordeonitems[i].classList.remove('msg-active');
      }
    }
  }

  accordeonWrap.addEventListener('click', (e) => {
    let target = e.target;
    target = target.closest('.title_block');

    if (target) {
      accordeonitems.forEach((item, i) => {
        if (item === target) {
          toggleAccordeonContent(i);
        }
      })
    }
  });
};

export default faqAkkordeon;