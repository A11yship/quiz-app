import ShowBookmarks from '../showBookmarks/showBookmarks';

export default function Nav() {
  const homeButton = document.querySelector('[data-js="nav-button-home"]');
  const bookmarkButton = document.querySelector(
    '[data-js="nav-button-bookmark"]'
  );
  const createButton = document.querySelector('[data-js="nav-button-create"]');
  const profileButton = document.querySelector(
    '[data-js="nav-button-profile"]'
  );

  const homePage = document.querySelector('[data-js="home-page"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const createPage = document.querySelector('[data-js="create-page"]');
  const profilePage = document.querySelector('[data-js="profile-page"]');

  const headline = document.querySelector('[data-js="headline"]');

  const buttons = [homeButton, bookmarkButton, createButton, profileButton];
  const pages = [homePage, bookmarkPage, createPage, profilePage];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      pages.forEach(page => {
        page.classList.add('page--hidden');
      });

      buttons.forEach(button => {
        button.classList.remove('nav_list__item__button--current');
        const navIcon = button.querySelector('[data-js="nav-icon"]');
        navIcon.classList.remove('nav-icon--current');
      });

      const navIcon = button.querySelector('[data-js="nav-icon"]');
      navIcon.classList.add('nav-icon--current');
      button.classList.add('nav_list__item__button--current');

      if (button == homeButton) {
        homePage.classList.remove('page--hidden');
        headline.innerText = 'Quiz-App';
      } else if (button == bookmarkButton) {
        bookmarkPage.classList.remove('page--hidden');
        headline.innerText = 'Lesezeichen';
        ShowBookmarks();
      } else if (button == createButton) {
        createPage.classList.remove('page--hidden');
        headline.innerText = 'Fragen erstellen';
      } else {
        profilePage.classList.remove('page--hidden');
        headline.innerText = 'Profil';
      }
    });
  });
}
