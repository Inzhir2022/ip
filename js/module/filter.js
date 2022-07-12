const filter = () => {

  if (document.location.href == 'http://localhost:3000/pages/books.html'||document.location.href =='http://localhost/IP/pages/books.html') {

    const filterMenu = document.querySelector('.books-filter-menu');
    const menuItems = filterMenu.querySelectorAll('li');
    const allBooks = filterMenu.querySelector('.all-books');
    const novelties = filterMenu.querySelector('.novelties-books');
    const bestSellers = filterMenu.querySelector('.best-sellers-books');
    const genres = filterMenu.querySelector('.genres-books');
    const authors = filterMenu.querySelector('.authors-books');

    const booksWrapper = document.querySelector('.books-wrapper');
    const contentAll = booksWrapper.querySelectorAll('.all-books');
    const noveltiesContent = booksWrapper.querySelectorAll('.novelties-books');
    const bestSellersContent = booksWrapper.querySelectorAll('.best-sellers-books');
    const genresContent = booksWrapper.querySelectorAll('.genres-books');
    const authorsContent = booksWrapper.querySelectorAll('.authors-books');

    const genresFilterMenu = document.querySelector('.genres-filter-menu');

    const genresFilterItems = genresFilterMenu.querySelectorAll('li');
    const genre1 = genresFilterMenu.querySelector('.genre1-books');
    const genre2 = genresFilterMenu.querySelector('.genre2-books');
    const genre3 = genresFilterMenu.querySelector('.genre3-books');
    const genre4 = genresFilterMenu.querySelector('.genre4-books');
    const genre5 = genresFilterMenu.querySelector('.genre5-books');
    const genre6 = genresFilterMenu.querySelector('.genre6-books');
    const genre7 = genresFilterMenu.querySelector('.genre7-books');
    const otherGenres = genresFilterMenu.querySelector('.other-genres-books');

    const genresBooksWrapper = document.querySelector('.genres-books-wrapper');

    const genre1Books = genresBooksWrapper.querySelectorAll('.genre1-books');
    const genre2Books = genresBooksWrapper.querySelectorAll('.genre2-books');
    const genre3Books = genresBooksWrapper.querySelectorAll('.genre3-books');
    const genre4Books = genresBooksWrapper.querySelectorAll('.genre4-books');
    const genre5Books = genresBooksWrapper.querySelectorAll('.genre5-books');
    const genre6Books = genresBooksWrapper.querySelectorAll('.genre6-books');
    const genre7Books = genresBooksWrapper.querySelectorAll('.genre7-books');
    const otherGenresBooks = genresBooksWrapper.querySelectorAll('.other-genres-books');

    const authorsFilterMenu = document.querySelector('.authors-filter-menu');

    const authorsFilterItems = authorsFilterMenu.querySelectorAll('li');
    const author1 = authorsFilterMenu.querySelector('.author1-books');
    const author2 = authorsFilterMenu.querySelector('.author2-books');
    const author3 = authorsFilterMenu.querySelector('.author3-books');
    const author4 = authorsFilterMenu.querySelector('.author4-books');
    const author5 = authorsFilterMenu.querySelector('.author5-books');
    const author6 = authorsFilterMenu.querySelector('.author6-books');
    const otherAuthors = authorsFilterMenu.querySelector('.other-authors-books');

    const authorBooksWrapper = document.querySelector('.author-books-wrapper');

    const author1Books = authorBooksWrapper.querySelectorAll('.author1-books');
    const author2Books = authorBooksWrapper.querySelectorAll('.author2-books');
    const author3Books = authorBooksWrapper.querySelectorAll('.author3-books');
    const author4Books = authorBooksWrapper.querySelectorAll('.author4-books');
    const author5Books = authorBooksWrapper.querySelectorAll('.author5-books');
    const author6Books = authorBooksWrapper.querySelectorAll('.author6-books');
    const otherAuthorsContent = authorBooksWrapper.querySelectorAll('.other-authors-books');

    const contentFilter = (contentType) => {

      contentAll.forEach(content => {
        content.classList.add('d-none');
      });
  
      if (contentType && contentType.length != 0) {
        contentType.forEach(content => {
          content.classList.remove('d-none');
        });
      }
    };

    const addEvent = (btn, content) => {
      btn.addEventListener('click', () => {
        contentFilter(content);
      });
    };

    addEvent(allBooks, contentAll);
    addEvent(novelties, noveltiesContent);
    addEvent(bestSellers, bestSellersContent);
    addEvent(genres, genresContent);
    addEvent(authors, authorsContent);

    addEvent(genre1, genre1Books);
    addEvent(genre2, genre2Books);
    addEvent(genre3, genre3Books);
    addEvent(genre4, genre4Books);
    addEvent(genre5, genre5Books);
    addEvent(genre6, genre6Books);
    addEvent(genre7, genre7Books);
    addEvent(otherGenres, otherGenresBooks);

    addEvent(author1, author1Books);
    addEvent(author2, author2Books);
    addEvent(author3, author3Books);
    addEvent(author4, author4Books);
    addEvent(author5, author5Books);
    addEvent(author6, author6Books);
    addEvent(otherAuthors, otherAuthorsContent);

    const menuFilter = (menu, items) => {
      menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.tagName == "LI") {
          items.forEach(item => item.classList.remove('active'));
          target.classList.add('active');
        }
      });
    };

    menuFilter(filterMenu, menuItems);
    menuFilter(genresFilterMenu, genresFilterItems);
    menuFilter(authorsFilterMenu, authorsFilterItems);
  }
};


export default filter;