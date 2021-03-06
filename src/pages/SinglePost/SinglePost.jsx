import './singlepost.scss';

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { getPostBySlugRequest } from '../../redux/posts/posts.actions';
import { Helmet } from 'react-helmet-async';
import {
	FacebookShareButton,
	LinkedinShareButton,
	EmailShareButton,
} from 'react-share';

import { ReactComponent as FacebookLogo } from '../../assets/images/facebook.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/images/linkedin.svg';
import { ReactComponent as EmailLogo } from '../../assets/images/email.svg';
import Tag from '../../components/Tag/Tag';

function SinglePost({ post, onGetPostBySlug }) {
	const { slug } = useParams();

	useEffect(() => {
		onGetPostBySlug(slug);
	}, []);

	return (
		<div className="single-post-container">
			{post && (
				<>
					<Helmet>
						<title>{post.title}</title>
					</Helmet>
					<div className="single-post">
						<img
							src={`https://portfoliostorage.fra1.digitaloceanspaces.com/${post.featuredImage}`}
							alt="coding"
						/>
						<div className="single-post-content">
							<h1>{post.title}</h1>
							<p
								className="single-post-content-text"
								dangerouslySetInnerHTML={{
									__html: post.content.html,
								}}
							/>
							<div className="post-meta-container">
								<div className="post-author">
									<p className="author">{post.author}</p>
									<p className="date">
										{moment(post.createdAt).format(
											'MMMM Do YYYY'
										)}
									</p>
								</div>

								<div className="tags">
									{post.tags.map((tag, index) => {
										return <Tag key={index} tag={tag} />;
									})}
								</div>
							</div>
						</div>
					</div>
					<div className="share-icons">
						<p>
							If you enjoyed the content, help us grow by sharing
							to your favourite socials
						</p>
						<div className="share-icons-container">
							<FacebookShareButton
								url={`https://alextirim.com/${post.slug}`}
								quote={`Check out this great post about ${post.title}`}
							>
								<FacebookLogo />
							</FacebookShareButton>
							<LinkedinShareButton
								url={`https://alextirim.com/${post.slug}`}
							>
								<LinkedinLogo />
							</LinkedinShareButton>
							<EmailShareButton
								subject={`Check out this great post about ${post.title}`}
								body={`There are plenty more posts on alextirim.com`}
							>
								<EmailLogo />
							</EmailShareButton>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	post: state.posts.post,
});

const mapDispatchToProps = (dispatch) => ({
	onGetPostBySlug: (slug) => dispatch(getPostBySlugRequest(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);