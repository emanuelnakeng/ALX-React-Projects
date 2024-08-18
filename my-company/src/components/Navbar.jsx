import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav style={{
				backgroundColor: 'white',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/services'>Services</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
