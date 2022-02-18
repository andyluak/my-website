import './singlepost.scss';

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router';
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

export default function SinglePost() {
	const [post, setPost] = useState(null);
	const { slug } = useParams();

	const fetchPost = async () => {
		let result = await fetch(`/api/posts/slug/${slug}`);
		let post = await result.json();
		setPost(post);
	};

	useEffect(() => {
		fetchPost();
	}, []);

	return (
		<div>
			{post && (
				<>
					{' '}
					<Helmet>
						<title>{post.title}</title>
					</Helmet>
					<div className="single-post">
						<img
							src={`https://portfoliostorage.fra1.digitaloceanspaces.com/${post.featuredImage}`}
							alt="featured-image"
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
