function getPublicationYear(releaseDate) {
  if (!releaseDate) return "Ano não informado";

  // A PotterAPI informa releaseDate como data. Também aceita um ano isolado.
  const dateText = String(releaseDate);
  const yearMatch = dateText.match(/\b(1[0-9]{3}|20[0-9]{2})\b/);

  if (yearMatch) return yearMatch[0];

  const date = new Date(releaseDate);
  return Number.isNaN(date.getTime())
    ? "Ano não informado"
    : String(date.getFullYear());
}

function BookItem({ book, onSelectBook }) {
  const year = getPublicationYear(book.releaseDate);

  return (
    <li className="book-list-item">
      <button
        className="book-item-button"
        type="button"
        onClick={() => onSelectBook(book)}
      >
        <span className="book-item-title">{book.title || "Título não informado"}</span>
        <span className="book-item-year">{year}</span>
        <span className="book-item-arrow" aria-hidden="true">›</span>
      </button>
    </li>
  );
}

export default BookItem;