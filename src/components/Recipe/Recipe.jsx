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
      <img src={recipe_image} alt="Recipe Image" />
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-[#282828]">{recipe_name}</h2>
        <p>{description}</p>
      </div>
      <hr className="my-4" />
      <div>
        <h4 className="text-lg font-medium">
          Ingredients: {ingredients.length}
        </h4>
        {ingredients.map((ingredient, idx) => (
          <ul key={idx} className="list-disc ml-4">
            <li>{ingredient}</li>
          </ul>
        ))}
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-8 mb-4">
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
