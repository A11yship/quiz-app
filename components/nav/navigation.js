export default function Nav() {
  const homeButton = document.querySelector('[data-js="nav-button-home"]');
  const bookmarkButton = document.querySelector(
    '[data-js="nav-button-bookmark"]'
  );
  const createButton = document.querySelector('[data-js="nav-button-create"]');
  const profileButton = document.querySelector(
    '[data-js="nav-button-profile"]'
  );

  const homePage = document.querySelector('[data-js="mainpage"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const createPage = document.querySelector('[data-js="create-page"]');
  const profilePage = document.querySelector('[data-js="profile-page"]');

  const buttons = [homeButton, bookmarkButton, createButton, profileButton];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Test");
    });
  });
}
