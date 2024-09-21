import { useEffect } from 'react';
import { useState } from 'react';
import recipeData from '../data.json';

function Home() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		setRecipes(recipeData);
	}, []);

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-white mb-10 '>Recipes</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{recipes.map(recipe => {
					return (
						<article
							key={recipe.id}
							className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-x1 transition-shadow'
						>
							<img
								src={recipe.image}
								alt={recipe.title}
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-xl font-semibold'>
									{recipe.title}
								</h3>
								<p className='text-gray-600'>
									{recipe.summary}
								</p>
								<a
									href=''
									className='text-blue-500 hover:shadow-xl transition-shadow'
								>
									View Recipe
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
}
export default Home;
