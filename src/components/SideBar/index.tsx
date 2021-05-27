import React from 'react';

import { HomeRounded } from '@material-ui/icons';

export function SideBar() {
	return (
		<header>
			<nav>
				<a href='#'>
					<HomeRounded color="inherit" />
				</a>
			</nav>
		</header>
	);
}
