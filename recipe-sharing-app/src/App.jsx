import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
	return (
		<div id='root'>
			<AddRecipeForm />
			<RecipeList />
		</div>
	);
}

export default App;
