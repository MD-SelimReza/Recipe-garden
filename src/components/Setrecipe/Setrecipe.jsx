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
    <div className="border h-fit p-6 rounded-2xl mt-4 w-[30%]">
      <div className="mb-6">
        <h2 className="text-center text-[#282828] text-2xl font-semibold">
          Want to cook: {markRecipe.length}
        </h2>
        <hr className="my-2" />
        {markRecipe.map((recipeItem, idx) => (
          <MarkRecipe
            key={idx}
            recipeItem={recipeItem}
            idx={idx}
            handlePreparing={handlePreparing}
          ></MarkRecipe>
        ))}
      </div>
      <div>
        <h2 className="text-center text-[#282828] text-2xl font-semibold">
          Currently cooking:{cookingRecipe.length}
        </h2>
        <hr className="my-2" />
        {cookingRecipe.map((recipeItem, idx) => (
          <CookedRecipe
            key={idx}
            recipeItem={recipeItem}
            idx={idx}
          ></CookedRecipe>
        ))}
        <div className="font-medium flex justify-between items-center mt-4">
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
