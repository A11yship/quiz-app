export default function Bookmark() {
  const bookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );

  bookmarkButtons.forEach((button) => {
    const emptyBookmark = button.querySelector(
      '[data-js="bookmark-img-empty"]'
    );
    const fullBookmark = button.querySelector('[data-js="bookmark-img-full"]');
    let isBookmarked = false;

    button.addEventListener("click", () => {
      isBookmarked = !isBookmarked;

      if (isBookmarked) {
        emptyBookmark.classList.add("bookmark__img--hidden");
        fullBookmark.classList.remove("bookmark__img--hidden");
      } else {
        emptyBookmark.classList.remove("bookmark__img--hidden");
        fullBookmark.classList.add("bookmark__img--hidden");
      }
    });
  });
}
