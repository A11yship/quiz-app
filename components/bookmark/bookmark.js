export default function Bookmark() {
  const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
  const emptyBookmark = document.querySelector(
    '[data-js="bookmark-img-empty"]'
  );
  const fullBookmark = document.querySelector('[data-js="bookmark-img-full"]');

  bookmarkButton.addEventListener("click", () => {
    emptyBookmark.classList.toggle("bookmark__img--hidden");
    fullBookmark.classList.toggle("bookmark__img--hidden");
  });
}
