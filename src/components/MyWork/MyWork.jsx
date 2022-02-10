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
							Anything that lives on the web, I have an interest
							for.
						</p>
					</div>
				</div>
				<div className="mywork_container">
					<div className="mywork">
						<h4>Modula</h4>
						<p>
							Anything that lives on the web, I have an interest
							for.
						</p>
					</div>
				</div>
				<div className="mywork_container">
					<div className="mywork">
						<h4>Strong Testimonials</h4>
						<p>
							Anything that lives on the web, I have an interest
							for.
						</p>
					</div>
				</div>
				<div className="mywork_container">
					<div className="mywork">
						<h4>Peregrine Shop</h4>
						<p>
							Anything that lives on the web, I have an interest
							for.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyWork;
