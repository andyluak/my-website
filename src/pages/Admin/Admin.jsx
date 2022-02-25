import './admin.scss';

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Admin() {
	return (
		<div className="container-fluid container-with-sidebar">
			<div className="sidebar">
				<div className="sidebar-header">
					<h3>Admin</h3>
				</div>

				<div className="sidebar-content">
					<Link to='/admin/new'><p>Write new post</p></Link>
					<Link to='/admin/manager'><p>Manage posts</p></Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
