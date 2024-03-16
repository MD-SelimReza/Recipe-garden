import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Setrecipe from "./components/Setrecipe/Setrecipe";
import RecipeHeading from "./components/RecipeHeading/RecipeHeading";

function App() {
  const [markRecipe, setMarkRecipe] = useState([]);
  // console.log(markRecipe);

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
        <RecipeHeading></RecipeHeading>
        <div className="flex gap-5">
          <Recipes handleToCook={handleToCook}></Recipes>
          <Setrecipe markRecipe={markRecipe}></Setrecipe>
        </div>
      </main>
    </>
  );
}

export default App;
