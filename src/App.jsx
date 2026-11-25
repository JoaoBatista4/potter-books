import { useState } from "react";
import BookList from "./components/BookList/BookList.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";

const BOOKS_API_URL = "https://potterapi-fedeperin.vercel.app/en/books";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function buscarLivros() {
    setLoading(true);
    setError("");
    setSearched(true);
    setSelectedBook(null);

    try {
      const response = await fetch(BOOKS_API_URL);

      if (!response.ok) {
        throw new Error(
          `A API retornou um erro (HTTP ${response.status}). Tente novamente.`
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("A resposta da API não possui o formato esperado.");
      }

      setBooks(data);
      if (data.length === 0) {
        setError("A API não retornou livros.");
      }
    } catch (err) {
      setBooks([]);
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível consultar os livros. Verifique sua conexão."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSelectBook(book) {
    setSelectedBook(book);
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <div className="hero-content">
          <span className="eyebrow">BIBLIOTECA MÁGICA</span>
          <h1>Catálogo de Livros <span>— Harry Potter</span></h1>
          <p>Explore os livros, conheça suas histórias e escolha sua próxima leitura.</p>
          <button
            className="search-button"
            type="button"
            onClick={buscarLivros}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner" aria-hidden="true" />
                Buscando...
              </>
            ) : (
              <>
                <span aria-hidden="true">⌕</span>
                Buscar Livros
              </>
            )}
          </button>
        </div>
        <div className="hero-decoration" aria-hidden="true">✦</div>
      </header>

      {loading && (
        <p className="feedback loading-message" role="status" aria-live="polite">
          Carregando livros...
        </p>
      )}

      {!loading && error && (
        <p className="feedback error-message" role="alert">{error}</p>
      )}

      <section className="catalog-layout" aria-label="Catálogo de livros">
        <section className="list-panel">
          <div className="section-heading">
            <div>
              <span className="eyebrow">COLEÇÃO</span>
              <h2>Livros disponíveis</h2>
            </div>
            {books.length > 0 && (
              <span className="book-count">{books.length} livros</span>
            )}
          </div>

          {!searched && !loading && (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">✧</span>
              <p>Clique em <strong>Buscar Livros</strong> para carregar a coleção.</p>
            </div>
          )}

          {searched && !loading && !error && books.length > 0 && (
            <BookList books={books} onSelectBook={handleSelectBook} />
          )}
        </section>

        <section className="details-panel" aria-label="Detalhes do livro selecionado">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EM DESTAQUE</span>
              <h2>Detalhes do livro</h2>
            </div>
          </div>
          <BookDetails book={selectedBook} />
        </section>
      </section>

      <footer className="app-footer">
        Dados fornecidos pela <a href="https://github.com/fedeperin/potterapi" target="_blank" rel="noreferrer">PotterAPI</a>.
        Aplicação desenvolvida para praticar React e consumo de API REST.
      </footer>
    </main>
  );
}

export default App;