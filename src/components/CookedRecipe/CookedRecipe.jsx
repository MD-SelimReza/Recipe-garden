import PropTypes from "prop-types";
const CookedRecipe = ({ recipeItem, idx }) => {
  const { recipe_name, preparing_time, calories } = recipeItem;
  return (
    <tr className="bg-gray-200">
      <th className="p-1">{idx + 1}.</th>
      <td className="p-1">{recipe_name}</td>
      <td className="p-1">{preparing_time} minutes</td>
      <td className="p-1">{calories} calories</td>
    </tr>
  );
};

CookedRecipe.propTypes = {
  recipeItem: PropTypes.object.isRequired,
  idx: PropTypes.number,
};

export default CookedRecipe;
