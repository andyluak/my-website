import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import React, { lazy } from 'react';
import { connect } from 'react-redux';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Blog = lazy(() => import('./pages/Blog/Blog'));
const SinglePost = lazy(() => import('./pages/SinglePost/SinglePost'));
const TagOverview = lazy(() => import('./pages/TagOverview/TagOverview'));
const Login = lazy(() => import('./pages/Login/Login'));
const Admin = lazy(() => import('./pages/Admin/Admin'));
const PostManager = lazy(() => import('./pages/PostManager/PostManager'));
const PostWriter = lazy(() => import('./pages/PostWriter/PostWriter'));
const EditPost = lazy(() => import('./components/EditPost/EditPost'));

function App({isAuthenticated}) {
	return (
		<div className="App">
			<Helmet>
				<title>Alex Tirim </title>
				<meta
					name="description"
					content="Alex Tirim - free content to learn about programming and everything related to the web"
				/>
			</Helmet>
			<Header isAuthenticated={isAuthenticated}/>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/:slug" element={<SinglePost />} />
					<Route path="/tags/:tag" element={<TagOverview />} />
					<Route exact path="/admin-login" element={<Login />} />
					<Route exact path="/admin" element={<Admin />}>
						<Route path="manager" element={<PostManager />}>
							<Route path=":postID" element={<EditPost />} />
						</Route>
						<Route path="new" element={<PostWriter />} />
					</Route>
					<Route path="*" element={<Home />} />
				</Routes>
			</React.Suspense>
			<Footer />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	};
}

export default connect(mapStateToProps)(App);
