import React, { useState } from 'react';
import Hello from './components/Hello';
import './App.css';

function App() {
  const [getBookId, setGetBookId] = useState('');
  const [deleteBookId, setDeleteBookId] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [updateYear, setUpdateYear] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newYear, setNewYear] = useState('');
  const [book, setBook] = useState([
    { id: 1, title: "DSA", author: "ganesh", year: 1995 },
    { id: 2, title: "python", author: "akash", year: 1990 }
  ]);
  const [displayedBooks, setDisplayedBooks] = useState([]);

  const clickGet = () => {
    const books = book.map((element) => (
      <Hello 
        key={element.id} 
        id={element.id} 
        title={element.title} 
        author={element.author} 
        year={element.year} 
      />
    ));
    setDisplayedBooks(books);
  };

  const clickGetId = (id) => {
    const filteredBooks = book.filter((element) => element.id === parseInt(id)).map((element) => (
      <Hello 
        key={element.id} 
        id={element.id} 
        title={element.title} 
        author={element.author} 
        year={element.year} 
      />
    ));
    setDisplayedBooks(filteredBooks);
  };

  const updateYearHandler = () => {
    const updatedBooks = book.map((b) =>
      b.id === parseInt(updateId) ? { ...b, year: parseInt(updateYear) } : b
    );
    setBook(updatedBooks);
    setDisplayedBooks(
      updatedBooks.map((element) => (
        <Hello
          key={element.id}
          id={element.id}
          title={element.title}
          author={element.author}
          year={element.year}
        />
      ))
    );
    setUpdateId('');
    setUpdateYear('');
  };

  const deleteBookHandler = (id) => {
    const updatedBooks = book.filter((element) => element.id !== parseInt(id));
    setBook(updatedBooks);
    setDisplayedBooks(
      updatedBooks.map((element) => (
        <Hello
          key={element.id}
          id={element.id}
          title={element.title}
          author={element.author}
          year={element.year}
        />
      ))
    );
    setDeleteBookId('');
  };

  const addBookHandler = () => {
    
    const newId = book.length > 0 ? Math.max(...book.map(b => b.id)) + 1 : 1;
    
    const newBook = {
      id: newId,
      title: newTitle,
      author: newAuthor,
      year: parseInt(newYear)
    };

    const updatedBooks = [...book, newBook];
    setBook(updatedBooks);
    setDisplayedBooks(
      updatedBooks.map((element) => (
        <Hello
          key={element.id}
          id={element.id}
          title={element.title}
          author={element.author}
          year={element.year}
        />
      ))
    );

    
    setNewTitle('');
    setNewAuthor('');
    setNewYear('');
  };

  return (
    <>
      <h1>Library Management</h1>
      <button onClick={clickGet}>Get books</button>
      
      
      <div>
        <input 
          type="text" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} 
          placeholder="Enter book title" 
        />
        <input 
          type="text" 
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)} 
          placeholder="Enter book author" 
        />
        <input 
          type="number" 
          value={newYear}
          onChange={(e) => setNewYear(e.target.value)} 
          placeholder="Enter book year" 
        />
        <button onClick={addBookHandler}>Add New Book</button>
      </div>

      
      <div>
        <input 
          type="number" 
          value={getBookId}
          onChange={(e) => setGetBookId(e.target.value)} 
          placeholder="Enter the ID to Get Book" 
        />
        <button onClick={() => clickGetId(getBookId)}>Get Book by ID</button>
      </div>

      
      <div>
        <input 
          type="number" 
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
          placeholder="Enter Book ID to Update Year" 
        />
        <input 
          type="number" 
          value={updateYear}
          onChange={(e) => setUpdateYear(e.target.value)}
          placeholder="Update Year" 
        />
        <button onClick={updateYearHandler}>Update Year</button>
      </div>

      
      <div>
        <input 
          type="number" 
          value={deleteBookId}
          onChange={(e) => setDeleteBookId(e.target.value)} 
          placeholder="Enter Book ID to Delete"
        />
        <button onClick={() => deleteBookHandler(deleteBookId)}>Delete Book</button>
      </div>

      
      <div>
        {displayedBooks}
      </div>
    </>
  );
}

export default App;
