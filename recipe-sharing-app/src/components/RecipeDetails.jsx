import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import useRecipeStore from './recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
	const params = useParams();

	const { recipe, favorites, addFavorite, removeFavorite } = useRecipeStore(
		state => ({
			recipe: state.recipes.find(item => item.id == params.id),
			favorites: state.favorites,
			addFavorite: state.addFavorite,
			removeFavorite: state.removeFavorite,
		})
	);

	return (
		<div>
			<h1>{recipe.title}</h1>
			<p>{recipe.description}</p>
			<button
				onClick={
					favorites.includes(recipe.id)
						? () => removeFavorite(recipe.id)
						: () => addFavorite(recipe.id)
				}
			>
				{favorites.includes(recipe.id)
					? 'Remove Favorite'
					: 'Favorite Recipe'}
			</button>
			<DeleteRecipeButton recipeId={recipe.id} />
			<EditRecipeForm recipe={recipe} />
		</div>
	);
};

export default RecipeDetails;
