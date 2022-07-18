export default function Bookmark(button, bookmark, card) {
  button.addEventListener('click', () => {
    card.isBookmarked = !card.isBookmarked;

    if (card.isBookmarked) {
      bookmark.classList.add('bookmark__svg--filled');
      bookmark.setAttribute('alt', 'Lesezeichen gesetzt');
    } else {
      bookmark.classList.remove('bookmark__svg--filled');
      bookmark.setAttribute('alt', 'Lesezeichen nicht gesetzt');
    }
  });
}
