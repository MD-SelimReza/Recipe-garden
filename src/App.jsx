import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Setrecipe from "./components/Setrecipe/Setrecipe";
import RecipeHeading from "./components/RecipeHeading/RecipeHeading";

function App() {
  const [markRecipe, setMarkRecipe] = useState([]);
  const [cookingRecipe, setCookingRecipe] = useState([]);
  console.log(markRecipe);
  console.log(cookingRecipe);

  const [preparingTime, setPreparingTime] = useState(0);
  const [calorie, setCalorie] = useState(0);

  const handleToCook = (recipe) => {
    const newMarkRecipe = [...markRecipe, recipe];
    setMarkRecipe(newMarkRecipe);
  };

  const handlePreparing = (recipe_id, preparing_time, calories) => {
    const totalPreparingTime = preparingTime + preparing_time;
    setPreparingTime(totalPreparingTime);

    const totalCalorie = calorie + calories;
    setCalorie(totalCalorie);

    const preparingRecipe = markRecipe.filter(
      (singleRecipe) => singleRecipe.recipe_id !== recipe_id
    );
    setMarkRecipe(preparingRecipe);

    const cookedRecipe = markRecipe.filter(
      (singleRecipe) => singleRecipe.recipe_id === recipe_id
    );
    const cookedRecipes = [...cookingRecipe, ...cookedRecipe];
    setCookingRecipe(cookedRecipes);
    // console.log(cookedRecipes.length);
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
          <Setrecipe
            markRecipe={markRecipe}
            handlePreparing={handlePreparing}
            cookingRecipe={cookingRecipe}
            preparingTime={preparingTime}
            calorie={calorie}
          ></Setrecipe>
        </div>
      </main>
    </>
  );
}

export default App;
