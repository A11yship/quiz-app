export default function Bookmark() {
  const bookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );

  bookmarkButtons.forEach((button) => {
    const emptyBookmark = button.querySelector(
      '[data-js="bookmark-img-empty"]'
    );
    const fullBookmark = button.querySelector('[data-js="bookmark-img-full"]');

    button.addEventListener("click", () => {
      emptyBookmark.classList.toggle("bookmark__img--hidden");
      fullBookmark.classList.toggle("bookmark__img--hidden");
    });
  });
}
