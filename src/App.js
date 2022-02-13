import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Admin from './pages/Admin/Admin';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route
					exact
					path="/admin-login"
					element={
						<Admin />
					}
				/>
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
