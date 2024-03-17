import PropTypes from "prop-types";
const MarkRecipe = ({ recipeItem, idx, handlePreparing }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = recipeItem;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <th className="px-1">{idx + 1}.</th>
            <td className="px-1">{recipe_name}</td>
            <td className="px-1">{preparing_time} minutes</td>
            <td className="px-1">{calories} calories</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full text-center">
        <button
          className="btn"
          onClick={() => handlePreparing(recipe_id, preparing_time, calories)}
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

MarkRecipe.propTypes = {
  recipeItem: PropTypes.object.isRequired,
  idx: PropTypes.number,
  handlePreparing: PropTypes.func,
};

export default MarkRecipe;
