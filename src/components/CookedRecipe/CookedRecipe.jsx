import PropTypes from "prop-types";
const CookedRecipe = ({ recipeItem, idx }) => {
  const { recipe_name, preparing_time, calories } = recipeItem;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="pb-2">&nbsp;</th>
            <th className="pb-2">Name</th>
            <th className="pb-2">Time</th>
            <th className="pb-2">Calories</th>
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
    </div>
  );
};

CookedRecipe.propTypes = {
  recipeItem: PropTypes.object.isRequired,
  idx: PropTypes.number,
};

export default CookedRecipe;
