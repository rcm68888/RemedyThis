import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../index.css";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";

const HeroSection = () => {
  return (
    <section className="bg-[#FFF6EA] py-20 text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold">Welcome to RemedyThis</h1>
      <p className="mt-4 text-lg">Find the best remedies tailored for you.</p>
    </section>
  );
};

const ImageSlideshow = () => {
  const images = [Carousel1, Carousel2, Carousel3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[300px] h-[100px] mx-auto my-10 flex justify-center items-center">
      <img
        src={images[index]}
        alt="Slideshow"
        className="w-[300px] h-[100px] object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

const SearchBar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/publicsearch?query=${search}`);
  };

  return (
    <div className="flex justify-center my-10">
      <input
        type="text"
        placeholder="Search remedies..."
        className="border p-2 rounded-l-md w-80"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded-r-md" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

const Features = () => {
  return (
    <section className="my-10 px-10 text-center">
      <h2 className="text-3xl font-bold">Our Features</h2>
      <p className="mt-4">Explore the amazing remedies we offer.</p>
    </section>
  );
};

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/api/faqs")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <section className="my-10 px-10">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border p-4 my-2 rounded-md shadow-md">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-lg font-semibold">{question}</h3>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const remedies = ['AI Results: ', 'Ginger Tea', 'Aloe Vera', 'Lavender Oil', 'Moringa', ', etc.'];
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, [localStorage.getItem('authToken')]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/');
  };

  const filteredRemedies = remedies.filter((remedy) =>
    remedy.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
            <button onClick={() => navigate('/search')}>Search</button>
            <button onClick={() => navigate('/chatbot')}>Chat</button>
            <button onClick={() => navigate('/near-me')}>NearMe</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </>
        )}
      </div>
      <HeroSection />
      <ImageSlideshow />
      <SearchBar search={search} setSearch={setSearch} />
      <Features />
      <FAQ />
      <ul>
        {filteredRemedies.map((remedy, index) => (
          <li key={index}>{remedy}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
