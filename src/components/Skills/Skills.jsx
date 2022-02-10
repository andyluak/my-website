import './skills.scss';
import { ReactComponent as WebDev } from '../../assets/images/webdev.svg';
import { ReactComponent as PluginDev } from '../../assets/images/plugindev.svg';
import { ReactComponent as SiteDev } from '../../assets/images/sitedev.svg';
import React from 'react';

const Skills = () => {
	return (
		<section className="skills">
			<h1>SKILLS</h1>
			<div className="skills-container">
				<div className="skill_container">
					<div className="skill">
						<WebDev className="skill_icon" />
						<p>
							Anything that lives on the web, I have an interest
							for.
						</p>
					</div>
				</div>
				<div className="skill_container">
					<div className="skill">
						<PluginDev className="skill_icon" />
						<p>
							Anything that lives on the web, I have an interest
							for.
						</p>
					</div>
				</div>
				<div className="skill_container">
					<div className="skill">
						<SiteDev className="skill_icon" />
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

export default Skills;
