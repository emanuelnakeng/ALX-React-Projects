import { create } from 'zustand';

const useRecipeStore = create(set => ({
	recipes: [],
	searchTerm: '',
	setSearchTerm: searchTerm => set({ searchTerm: searchTerm }),
	filteredRecipes: [],
	filterRecipes: () =>
		set(state => ({
			filteredRecipes: state.recipes.filter(recipe =>
				recipe.title
					.toLowerCase()
					.includes(state.searchTerm.toLowerCase())
			),
		})),
	addRecipe: newRecipe =>
		set(state => ({ recipes: [...state.recipes, newRecipe] })),

	setRecipes: recipes => set(recipes),
	deleteRecipe: id =>
		set(state => ({
			recipes: state.recipes.filter(recipeItem => recipeItem.id !== id),
		})),
	updateRecipe: updateRecipe =>
		set(state => ({
			recipes: state.recipes.map(recipe =>
				recipe.id === updateRecipe.id ? updateRecipe : recipe
			),
		})),
}));

export default useRecipeStore;
