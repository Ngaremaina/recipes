import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/RecipesList';
import { Routes, Route } from 'react-router-dom';
import ShowDetails from './components/ShowDetails';
import Footer from './components/Footer';
import { fetchData } from './components/service';

function App() {
  const [recipes, setRecipes] =  useState([])
  const [searchterm, setSearchterm] = useState("")
  
  useEffect(() => {
    fetchData(searchterm)
    .then(data => setRecipes(data.hits))
  },[searchterm])


  const getSearch = (search) => {
    return setSearchterm(search)
    
  }


  return (
    <div>
      <Header getSearch = {getSearch}/>
      <Routes>
        <Route path="/" element = { <Recipes recipes={recipes}/> }/>
        <Route path="/:label" element= { <ShowDetails />}/>
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;
