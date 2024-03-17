import PropTypes from "prop-types";
import MarkRecipe from "../MarkRecipe/MarkRecipe";
const Setrecipe = ({
  markRecipe,
  handlePreparing,
  cookingRecipe,
  preparingTime,
  calorie,
}) => {
  console.log(cookingRecipe);
  return (
    <div className="border h-fit p-6 rounded-2xl mt-4 w-[30%]">
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
      <h2 className="text-center text-[#282828] text-2xl font-semibold">
        Currently cooking:{cookingRecipe.length}
      </h2>
      <hr className="my-2" />
      <p>Preparing Time: {preparingTime}</p>
      <p>Calorie: {calorie}</p>
    </div>
  );
};

Setrecipe.propTypes = {
  markRecipe: PropTypes.array.isRequired,
  cookingRecipe: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func,
  preparingTime: PropTypes.number,
  calorie: PropTypes.number,
};

export default Setrecipe;
