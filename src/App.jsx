import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";

function App() {
  const [markRecipe, setMarkRecipe] = useState([]);

  const handleToCook = (recipe) => {
    const newMarkRecipe = [...markRecipe, recipe];
    setMarkRecipe(newMarkRecipe);
  };
  return (
    <>
      <header className="container lg:px-10">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="container lg:px-10">
        <Recipes handleToCook={handleToCook}></Recipes>
      </main>
    </>
  );
}

export default App;
