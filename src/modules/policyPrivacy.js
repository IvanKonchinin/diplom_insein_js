const policyPrivacy = () => {
  const popupPrivacy = document.querySelector('.popup-privacy');
  document.addEventListener('click', (e) => {
    let target = e.target;
    if (target.matches('.link-privacy')) popupPrivacy.style.visibility = 'visible';
    if (target.matches('.close') && target.closest('.popup-privacy')) popupPrivacy.style.visibility = 'hidden';
  })
};

export default policyPrivacy;