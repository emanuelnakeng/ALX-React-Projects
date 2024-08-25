import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import NoPage from './components/NoPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={
						<div id='root'>
							<AddRecipeForm />
							<RecipeList />
						</div>
					}
				/>
				<Route path='recipe/:id' element={<RecipeDetails />} />
				<Route path='*' element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
