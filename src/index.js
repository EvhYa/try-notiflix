import Notiflix from 'notiflix';
// import '@fortawesome/fontawesome-free/css/all.css';

Notiflix.Notify.init({
  width: '345px',
  position: 'rigth-top',
  cssAnimationStyle: 'from-top',
  borderRadius: '18px',
  fontFamily: 'DM Sans',
  fontSize: '18px',
  clickToClose: true,
  useIcon: true,
  pauseOnHover: true,
  useFontAwesome: true,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '50px',
  failure: {
    fontAwesomeClassName: 'fa-solid fa-book-skull',
    fontAwesomeIconColor: 'black',
  },
});

const btn = document.querySelector('.js-button');

btn.addEventListener('click', onClick);

function onClick() {
  //   Notiflix.Notify.success('SUCCESS');
  Notiflix.Notify.failure(
    'Це повідомлення має свою власну іконку',
    'Ваш текст тут',
    'custom-icon'
  );
}
