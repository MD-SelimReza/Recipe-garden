import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((recipe) => setRecipes(recipe));
  }, []);
  return (
    <div>
      <div className="px-40 text-center mt-20 space-y-3">
        <h2 className="text-3xl font-semibold text-[#150B2B]">
          Our Recipes: {recipes.length}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            recipe={recipe}
            //   handleToCook={handleToCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
