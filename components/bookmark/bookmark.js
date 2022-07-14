export default function Bookmark(button, bookmark) {
  let isBookmarked = false;

  button.addEventListener('click', () => {
    isBookmarked = !isBookmarked;

    if (isBookmarked) {
      bookmark.classList.add('bookmark__svg--filled');
      bookmark.setAttribute('alt', 'Lesezeichen gesetzt');
    } else {
      bookmark.classList.remove('bookmark__svg--filled');
      bookmark.setAttribute('alt', 'Lesezeichen nicht gesetzt');
    }
  });
}
