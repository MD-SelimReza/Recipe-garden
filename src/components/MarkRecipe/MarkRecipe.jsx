import PropTypes from "prop-types";
const MarkRecipe = ({ recipeItem, idx }) => {
  const { recipe_name, preparing_time, calories } = recipeItem;
  return (
    <div>
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
        <tr className="bg-gray-200">
          <th className="px-1">{idx + 1}.</th>
          <td className="px-1">{recipe_name}</td>
          <td className="px-1">{preparing_time} minutes</td>
          <td className="px-1">{calories} calories</td>
        </tr>
      </table>
      <div className="w-full text-center">
        <button className="btn">Preparing</button>
      </div>
    </div>
  );
};

MarkRecipe.propTypes = {
  recipeItem: PropTypes.object.isRequired,
  idx: PropTypes.number,
};

export default MarkRecipe;
