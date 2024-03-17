import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((recipe) => setRecipes(recipe));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 w-[70%]">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          handleToCook={handleToCook}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleToCook: PropTypes.func,
};

export default Recipes;
