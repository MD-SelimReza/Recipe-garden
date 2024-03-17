import PropTypes from "prop-types";
const MarkRecipe = ({ recipeItem, idx, handlePreparing }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = recipeItem;
  return (
    <tr className="bg-gray-200 p-2">
      <th className="p-2">{idx + 1}.</th>
      <td className="p-2">{recipe_name}</td>
      <td className="p-2">{preparing_time} minutes</td>
      <td className="p-2">{calories} calories</td>
      <td className="h-full">
        <button
          className="btn bg-[#0BE58A] font-medium align-middle text-lg text-[#150B2B] rounded-full px-6"
          onClick={() => handlePreparing(recipe_id, preparing_time, calories)}
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

MarkRecipe.propTypes = {
  recipeItem: PropTypes.object.isRequired,
  idx: PropTypes.number,
  handlePreparing: PropTypes.func,
};

export default MarkRecipe;
