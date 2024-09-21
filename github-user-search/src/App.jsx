import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-4xl font-bold mb-8 text-[#6c757d]'>
				Search GitHub Like a Pro!
			</h1>
			<Search />
		</div>
	);
}

export default App;
