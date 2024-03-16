import PropTypes from "prop-types";
import MarkRecipe from "../MarkRecipe/MarkRecipe";
const Setrecipe = ({ markRecipe }) => {
  //   console.log(markRecipe);
  return (
    <div className="border h-fit p-6 rounded-2xl mt-4 w-[30%]">
      <h2 className="text-center text-[#282828] text-2xl font-semibold">
        Want to cook: {markRecipe.length}
      </h2>
      <hr className="my-2" />
      {markRecipe.map((recipeItem, idx) => (
        <MarkRecipe key={idx} recipeItem={recipeItem} idx={idx}></MarkRecipe>
      ))}
    </div>
  );
};

Setrecipe.propTypes = {
  markRecipe: PropTypes.array.isRequired,
};

export default Setrecipe;
