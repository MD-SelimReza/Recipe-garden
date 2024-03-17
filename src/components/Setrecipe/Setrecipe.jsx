import PropTypes from "prop-types";
import MarkRecipe from "../MarkRecipe/MarkRecipe";
import CookedRecipe from "../CookedRecipe/CookedRecipe";
const SetRecipe = ({
  markRecipe,
  handlePreparing,
  cookingRecipe,
  preparingTime,
  calorie,
}) => {
  return (
    <div className="border h-fit p-4 rounded-2xl mt-5 w-2/5 lg:w-[30%] shadow">
      <div className="mb-6">
        <h2 className="text-center text-[#282828] text-2xl font-semibold">
          Want to cook: {markRecipe.length}
        </h2>
        <hr className="my-2" />
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="p-2">&nbsp;</th>
                <th className="p-2">Name</th>
                <th className="p-2">Time</th>
                <th className="p-2">Calories</th>
                <th className="p-2">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {markRecipe.map((recipeItem, idx) => (
                <MarkRecipe
                  key={idx}
                  recipeItem={recipeItem}
                  idx={idx}
                  handlePreparing={handlePreparing}
                ></MarkRecipe>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 className="text-center text-[#282828] text-2xl font-semibold">
          Currently cooking: {cookingRecipe.length}
        </h2>
        <hr className="my-2" />
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="p-2">&nbsp;</th>
                <th className="p-2">Name</th>
                <th className="p-2">Time</th>
                <th className="p-2">Calories</th>
              </tr>
            </thead>
            <tbody>
              {cookingRecipe.map((recipeItem, idx) => (
                <CookedRecipe
                  key={idx}
                  recipeItem={recipeItem}
                  idx={idx}
                ></CookedRecipe>
              ))}
            </tbody>
          </table>
        </div>
        <div className="font-medium gap-6 flex justify-between items-center mt-4">
          <p>Total Time = {preparingTime} minutes</p>
          <p>Total Calories = {calorie} calories</p>
        </div>
      </div>
    </div>
  );
};

SetRecipe.propTypes = {
  markRecipe: PropTypes.array.isRequired,
  cookingRecipe: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func,
  preparingTime: PropTypes.number,
  calorie: PropTypes.number,
};

export default SetRecipe;
