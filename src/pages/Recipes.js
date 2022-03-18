import PreviousSearches from "../components/PreviousSearches/PreviousSearches";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { recipes } from "../db/recipesData";

const Recipes = () => {
  return (
    <>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default Recipes;
