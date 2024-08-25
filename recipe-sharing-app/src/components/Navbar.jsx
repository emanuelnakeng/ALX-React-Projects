import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<ul>
				<li>
					<Link to='/'>Recipes</Link>
				</li>
				<li>
					<Link to='/favorites'>Favorites</Link>
				</li>
				<li>
					<Link to='/recommendations'>Recommendations</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
