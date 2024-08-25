import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm(props) {
	const [title, setTitle] = useState(props.recipe.title);
	const [description, setDescription] = useState(props.recipe.description);
	const updateRecipe = useRecipeStore(state => state.updateRecipe);

	const handlerSubmit = e => {
		e.preventDefault();
		const recipeData = { ...props.recipe, title, description };
		updateRecipe(recipeData);
	};

	return (
		<form onSubmit={handlerSubmit}>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder='Title'
			/>
			<textarea
				value={description}
				onChange={e => setDescription(e.target.value)}
				placeholder='Description'
			/>
			<button type='submit'>Edit Recipe</button>
		</form>
	);
}

export default EditRecipeForm;
