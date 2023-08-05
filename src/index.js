import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-center',
  cssAnimationStyle: 'zoom',
  borderRadius: '18px',
  fontFamily: 'DM Sans',
  fontSize: '18px',
  fontAwesomeIconStyle: 'shadow',
  clickToClose: true,
});

const btn = document.querySelector('.js-button');

btn.addEventListener('click', onClick);

function onClick() {
//   Notiflix.Notify.success('SUCCESS');
  Notiflix.Notify.failure('FAILURE');
}


