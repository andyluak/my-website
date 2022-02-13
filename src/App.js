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
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route
					path="/admin-login"
					element={
						!localStorage.getItem('bearer') ? (
							<Admin />
						) : (
							<Navigate to="/" />
						)
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
