import './my-work.scss';
import { ReactComponent as WebDev } from '../../assets/images/webdev.svg';
import { ReactComponent as PluginDev } from '../../assets/images/plugindev.svg';
import { ReactComponent as SiteDev } from '../../assets/images/sitedev.svg';
import React from 'react';

const MyWork = () => {
	return (
		<section className="mywork_container">
			<h1>MY WORK</h1>
			<div className="myworks_container">
				<div className="mywork_container">
					<div className="mywork">
						<h4>Gutenberg Forms</h4>
						<p>
							This is the next generation WordPress form builder plugin.
						</p>
					</div>
				</div>
				<div className="mywork_container">
					<div className="mywork">
						<h4>Modula</h4>
						<p>
						Modula is the best WordPress gallery plugin for adding custom, unique and responsive galleries to your website.
						</p>
					</div>
				</div>
				<div className="mywork_container">
					<div className="mywork">
						<h4>Strong Testimonials</h4>
						<p>
						Beginners and pros alike will appreciate the wealth of flexible features refined over 4 years from user feedback and requests.
						</p>
					</div>
				</div>
				<div className="mywork_container">
					<div className="mywork">
						<h4>Peregrine Shop</h4>
						<p>
							Ecommerce store
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyWork;
