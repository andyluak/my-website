import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import PostManager from './pages/PostManager/PostManager';
import PostWriter from './pages/PostWriter/PostWriter';
import EditPost from './components/EditPost/EditPost';

import SinglePost from './pages/SinglePost/SinglePost';
import TagOverview from './pages/TagOverview/TagOverview';

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>Alex Tirim </title>
				<meta name="description" content="Alex Tirim - free content to learn about programming and everything related to the web" />
			</Helmet>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/:slug" element={<SinglePost />} />
				<Route path="/tags/:tag" element={<TagOverview />} />
				<Route
					exact
					path="/admin-login"
					element={
						<Login />
					}
				/>
				<Route exact path="/admin" element={<Admin />}>
					<Route path="manager" element={<PostManager />}>
						<Route path=":postID" element={<EditPost />} />
					</Route>
					<Route path="new" element={<PostWriter />} />
				</Route>
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default (App);
