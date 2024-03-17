import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import SetRecipe from "./components/SetRecipe/SetRecipe";
import RecipeHeading from "./components/RecipeHeading/RecipeHeading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [markRecipe, setMarkRecipe] = useState([]);
  const [cookingRecipe, setCookingRecipe] = useState([]);

  const [preparingTime, setPreparingTime] = useState(0);
  const [calorie, setCalorie] = useState(0);

  const handleToCook = (recipe) => {
    const alreadyExists = markRecipe.find(
      (recipeItem) => recipeItem.recipe_id === recipe.recipe_id
    );
    if (!alreadyExists) {
      const newMarkRecipe = [...markRecipe, recipe];
      setMarkRecipe(newMarkRecipe);
      toast("Recipe added.");
    } else {
      toast.warn("Recipe already selected!");
    }
  };

  const handlePreparing = (recipe_id, preparing_time, calories) => {
    toast("Cooked recipe added.");
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
  };

  return (
    <>
      <header className="container lg:px-10">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="container lg:px-10 mb-10">
        <RecipeHeading></RecipeHeading>
        <div className="flex gap-5">
          <Recipes handleToCook={handleToCook}></Recipes>
          <SetRecipe
            markRecipe={markRecipe}
            handlePreparing={handlePreparing}
            cookingRecipe={cookingRecipe}
            preparingTime={preparingTime}
            calorie={calorie}
          ></SetRecipe>
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
