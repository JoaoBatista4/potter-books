import BookItem from "../BookItem/BookItem.jsx";

function BookList({ books, onSelectBook }) {
  return (
    <ul className="book-list">
      {books.map((book, index) => {
        // A API normalmente fornece "number"; os demais campos são alternativas defensivas.
        const stableKey = book.id ?? book.number ?? book.title ?? `book-${index}`;

        return (
          <BookItem
            key={stableKey}
            book={book}
            onSelectBook={onSelectBook}
          />
        );
      })}
    </ul>
  );
}

export default BookList;