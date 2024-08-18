import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

function App() {
	console.log('wahat the fuck');

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/services' element={<Services />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// <Router>
{
	/* <Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route exact path='/services'>
					<Services />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
			</Switch> */
}
// </Router>
