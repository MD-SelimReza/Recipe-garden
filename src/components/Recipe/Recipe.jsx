import { GoClock } from "react-icons/go";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

const Recipe = ({ recipe, handleToCook }) => {
  const {
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div className="border p-6 rounded-2xl">
      <img src={recipe_image} alt="" />
      <div>
        <h2>{recipe_name}</h2>
        <p>{description}</p>
      </div>
      <hr />
      <div>
        <h4>Ingredients: {ingredients.length}</h4>
        <ul>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="flex items-center gap-4">
        <p className="flex items-center gap-2">
          <GoClock />
          {preparing_time} minutes
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineFire />
          {calories} calories
        </p>
      </div>
      <button
        className="btn bg-[#0BE58A] text-[#150B2B] text-lg rounded-full px-6"
        onClick={() => handleToCook(recipe)}
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleToCook: PropTypes.func,
};

export default Recipe;
