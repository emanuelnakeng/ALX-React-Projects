import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import useRecipeStore from './recipeStore';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
	const params = useParams();

	const { recipe } = useRecipeStore(state => ({
		recipe: state.recipes.find(item => item.id == params.id),
	}));

	return (
		<div>
			<h1>{recipe.title}</h1>
			<p>{recipe.description}</p>
			<DeleteRecipeButton recipeId={recipe.id} />
			<EditRecipeForm recipe={recipe} />
		</div>
	);
};

export default RecipeDetails;
