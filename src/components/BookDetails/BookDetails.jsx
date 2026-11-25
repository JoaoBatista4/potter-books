import { useEffect, useState } from "react";

function getPublicationYear(releaseDate) {
  if (!releaseDate) return "Não informado";

  const dateText = String(releaseDate);
  const yearMatch = dateText.match(/\b(1[0-9]{3}|20[0-9]{2})\b/);

  if (yearMatch) return yearMatch[0];

  const date = new Date(releaseDate);
  return Number.isNaN(date.getTime())
    ? "Não informado"
    : String(date.getFullYear());
}

function BookDetails({ book }) {
  const [coverError, setCoverError] = useState(false);

  // Reseta o erro ao trocar de livro para que a nova capa seja tentada.
  useEffect(() => {
    setCoverError(false);
  }, [book?.cover]);

  if (!book) {
    return (
      <div className="details-placeholder">
        <span className="placeholder-icon" aria-hidden="true">✧</span>
        <p>Selecione um livro para visualizar os detalhes.</p>
      </div>
    );
  }

  const year = getPublicationYear(book.releaseDate);
  const showCover = Boolean(book.cover) && !coverError;

  return (
    <article className="book-details-card">
      <div className="cover-wrapper">
        {showCover ? (
          <img
            className="book-cover"
            src={book.cover}
            alt={`Capa do livro ${book.title || ""}`}
            onError={() => setCoverError(true)}
          />
        ) : (
          <div className="cover-fallback">
            <span aria-hidden="true">✧</span>
            <small>Capa indisponível</small>
          </div>
        )}
      </div>

      <div className="book-information">
        <span className="detail-label">LIVRO SELECIONADO</span>
        <h3>{book.title || "Título não informado"}</h3>
        <p className="publication-year">Publicado em {year}</p>

        <div className="detail-divider" />

        <div className="detail-block">
          <h4>Descrição</h4>
          <p>{book.description || "Descrição não disponível."}</p>
        </div>

        <div className="pages-info">
          <span className="pages-icon" aria-hidden="true">▤</span>
          <span>
            <strong>{book.pages ?? "Não informado"}</strong>
            <small> páginas</small>
          </span>
        </div>
      </div>
    </article>
  );
}

export default BookDetails;
