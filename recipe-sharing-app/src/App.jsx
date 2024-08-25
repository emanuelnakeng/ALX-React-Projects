import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import NoPage from './components/NoPage';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
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
				<Route path='/favorites' element={<FavoritesList />} />
				<Route
					path='/recommendations'
					element={<RecommendationsList />}
				/>
				<Route path='*' element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
