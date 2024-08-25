import { create } from 'zustand';

const useRecipeStore = create(set => ({
	recipes: [],
	searchTerm: '',
	filteredRecipes: [],
	favorites: [],
	recommendations: [],
	setSearchTerm: searchTerm => set({ searchTerm: searchTerm }),
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
	addFavorite: recipeId =>
		set(state => ({
			favorites: [...state.favorites, recipeId],
		})),
	removeFavorite: recipeId =>
		set(state => ({
			favorites: state.favorites.filter(
				favoriteId => favoriteId !== recipeId
			),
		})),
	generateRecommendation: () =>
		set(state => {
			const recommended = state.recipes.filter(
				recipe =>
					state.favorites.includes(recipe.id) && Math.random() > 0.5
			);
			return { recommendations: recommended };
		}),
}));

export default useRecipeStore;
