import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail"; 
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import "./styles/App.css";

const profileData = [
  {
    id: 1,
    imgSrc: "https://avatars.githubusercontent.com/u/164981501?v=4",
    name: "김영욱",
    description: "안녕하세요! 저는 김영욱입니다.",
    techStack: ["HTML", "CSS", "JavaScript (React, Node.js)", "Python, JAVA (SpringMVC, Springboot), GitHub"],
    email: "2401340041@office.kopo.ac.kr",
    github: "https://github.com/ai-comic",

  },
  {
    id: 2,
    imgSrc: "https://avatars.githubusercontent.com/u/183576284?v=4",
    name: "류경민",
    description: "안녕하세요! 저는 류경민입니다.",
    techStack: ["HTML", "CSS", "JavaScript (React, Node.js)", "Python, JAVA (SpringMVC, Springboot), GitHub"],
    email: "2401340039@office.kopo.ac.kr",
    github: "https://github.com/hola39",
  },
  {
    id: 3,
    imgSrc: "https://raw.githubusercontent.com/so-pyeong/React-projects/refs/heads/main/%ED%94%84%EB%A1%9C%ED%95%84AI.png",
    name: "김소평",
    description: "안녕하세요! 저는 김소평입니다.",
    techStack: ["HTML", "CSS", "JavaScript (React, Node.js)", "Python, JAVA (SpringMVC, Springboot), GitHub"],
    email: "2401340096@office.kopo.ac.kr",
    github: "https://github.com/so-pyeong",
  },
];

const movieData = [
  {
    id: 1,
    title: "Inception",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 2,
    title: "Interstellar",
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 3,
    title: "Gladiator",
    poster: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
  },
  {
    id: 4,
    title: "The Wolf of Wall Street",
    poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
];

const bookData = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    poster: "https://m.media-amazon.com/images/I/81DI+BAN2SL._AC_UF1000,1000_QL80_.jpg",
    description: "A young boy discovers he's a wizard and goes on an adventure at Hogwarts.",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    poster: "https://m.media-amazon.com/images/I/915KEvGiX-L._AC_UF894,1000_QL80_.jpg",
    description: "Harry returns to Hogwarts for his second year and faces a dark force.",
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    poster: "https://m.media-amazon.com/images/I/812CcFkEPCL._AC_UF1000,1000_QL80_.jpg",
    description: "Harry uncovers dark secrets about his family while dealing with a dangerous criminal.",
  },
  {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
    poster: "https://m.media-amazon.com/images/I/81ibZ+xB3dL._AC_UF1000,1000_QL80_.jpg",
    description: "Harry competes in a magical tournament and faces new challenges.",
  },
];

const MiniApp = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [movies, setMovies] = useState(movieData);
  const [books, setBooks] = useState(bookData);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState("about");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (currentPage === "movies") {
      setMovies(movieData);
      setSelectedMovie(null);
    } else if (currentPage === "books") {
      setBooks(bookData);
      setSelectedBook(null);
    }
  }, [currentPage]);

  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
  };
  
  const handleBack = () => {
    setSelectedDeveloper(null);
    setSelectedMovie(null);
    setSelectedBook(null);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setSelectedBook(null);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setSelectedMovie(null);
  };

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setSearchQuery("");
    handleBack();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setMovies(movieData);
      setBooks(bookData);
    } else {
      if (currentPage === "movies") {
        setMovies(movieData.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase())));
      } else if (currentPage === "books") {
        setBooks(bookData.filter((book) => book.title.toLowerCase().includes(query.toLowerCase())));
      }
    }
  };

  return (
    <div className="App">
      <Menu onMenuClick={handleMenuClick} />
      
      {/* SearchBar가 'about' 페이지, 'books' 페이지에서 'selectedBook'이 없을 때만 보이게 수정 */}
      {currentPage !== "about" && (currentPage !== "books" || !selectedBook) && (currentPage !== "movies" || !selectedMovie) && (
        <SearchBar query={searchQuery} setSearchQuery={handleSearch} currentPage={currentPage} />
      )}
  
      {currentPage === "about" && (
        <AboutMe 
          profileData={profileData}
          selectedDeveloper={selectedDeveloper}
          onDeveloperClick={handleDeveloperClick}
          onBack={handleBack}
        />
      )}
  
      {currentPage === "movies" && (
        selectedMovie ? <MovieDetail movie={selectedMovie} onBack={handleBack} /> : <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
      )}
  
      {currentPage === "books" && (
        selectedBook ? <BookDetail book={selectedBook} onBack={handleBack} /> : <BookList books={books} onBookSelect={handleBookSelect} />
      )}
    </div>
  );    
};

export default MiniApp;
