
"use client";
/*
import Header from "@/components/Header";
import Button1 from "@/components/Button1";
import ArticleListe from "@/components/ArticleListe"; 


export default function Home() {
  const Alerte = () => {
    alert("button clicked!");
  };
  const articles = [ {
    title :"article 1", content: "content for article1"
  },
  {
    title :"article 2", content: "content for article"
  },]

  return (
    <div>
      <Header titre={'Ecommerce'} nom={'Boubacar'} />
      <h1>Interactive button</h1>
      <Button1 texte={"cliquer ici "} onClick={Alerte} />
      <ArticleListe/>
    </div>
  );
} */
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homee from './Homee';
import About from './About';
import Contact from './Contact';
import Homeee from './'
/*
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Homee</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

*/
