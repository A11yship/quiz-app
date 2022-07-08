export default function Bookmark() {
  const bookmarkButtons = document.querySelectorAll(
    '[data-js="bookmark-button"]'
  );

  bookmarkButtons.forEach((button) => {
    const bookmark = button.querySelector('[data-js="bookmark-svg"]');
    let isBookmarked = false;

    button.addEventListener("click", () => {
      isBookmarked = !isBookmarked;

      if (isBookmarked) {
        bookmark.classList.add("bookmark__svg--filled");
        bookmark.setAttribute("alt", "Lesezeichen gesetzt");
      } else {
        bookmark.classList.remove("bookmark__svg--filled");
        bookmark.setAttribute("alt", "Lesezeichen nicht gesetzt");
      }
    });
  });
}
