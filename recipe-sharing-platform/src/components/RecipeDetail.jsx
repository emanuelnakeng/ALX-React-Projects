import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
	const { id } = useParams();
	const [viewRecipe, setViewRecipe] = useState(null);

	useEffect(() => {
		fetch('../src/data.json')
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return;
			})
			.then(data => {
				const selectedRecipe = data.find(
					item => item.id == parseInt(id)
				);
				console.log(selectedRecipe);

				setViewRecipe(selectedRecipe);
			});
	}, []);

	if (viewRecipe) {
		return (
			<div className='container mx-auto p-6'>
				<h1 className='text-white mb-10'>{viewRecipe.title}</h1>
				<img
					src={viewRecipe.image}
					alt={viewRecipe.title}
					className='w-full h-64 object-cover mb-4 rounded-lg shadow-lg'
				/>

				<div className='mb-6'>
					<h2 className='text-2xl font-semibold mb-2'>Ingredients</h2>
					<ul className='list-disc list-inside'>
						{viewRecipe.ingredients.map((ingredient, index) => (
							<li key={index}>{ingredient}</li>
						))}
					</ul>
				</div>
				<div className='mb-6'>
					<h2 className='text-2xl font-semibold mb-2'>
						Instructions
					</h2>
					<ol className='list-decimal list-inside'>
						{viewRecipe.instructions.map((step, index) => (
							<li key={index} className='mb-2'>
								{step}
							</li>
						))}
					</ol>
				</div>
				<Link to='/' className='text-blue-500 hover:underling'>
					Back to Home
				</Link>
			</div>
		);
	}
}
export default RecipeDetail;
