import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const RecipeList = () => {
	const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
	const searchTerm = useRecipeStore(state => state.searchTerm);
	const recipes = useRecipeStore(state => state.recipes);

	return (
		<div>
			<SearchBar />
			{searchTerm === ''
				? recipes.map(recipe => (
						<div key={recipe.id}>
							<h3>{recipe.title}</h3>
							<p>{recipe.description}</p>
							<Link to={`recipe/${recipe.id}`}>View recipe</Link>
						</div>
				  ))
				: filteredRecipes.map(recipe => {
						return (
							<div key={recipe.id}>
								<h3>{recipe.title}</h3>
								<p>{recipe.description}</p>
								<Link to={`recipe/${recipe.id}`}>
									View recipe
								</Link>
							</div>
						);
				  })}
		</div>
	);
};

export default RecipeList;
