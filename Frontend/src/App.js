import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login";
import Registration from './components/Registration';
import Logreg from "./components/Logreg";



function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
   
        <Routes>
          <Route path="/register" element={Registration} />
					<Route path="/login" element={<Login />} />
          {/* <Route path="/register" component={<Registration />} /> */}
          <Route path="/" element={<Logreg />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
    
      </main>
    </React.Fragment>
  );
}

export default App;
