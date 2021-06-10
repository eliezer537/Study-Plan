import React from 'react';
import styles from './styles.module.scss';

import {
	HomeRounded,
	SchoolRounded,
	NotificationsRounded,
} from '@material-ui/icons';

export function SideBar() {
	return (
		<header className={styles.headerContainer}>
			<nav>
				<a href='#'>
					<HomeRounded style={{ color: '#fff', fontSize: 30 }} />
				</a>

				<a href='#'>
					<SchoolRounded style={{ color: '#fff', fontSize: 30 }} />
				</a>

				<a href='#'>
					<NotificationsRounded style={{ color: '#fff', fontSize: 30 }} />
				</a>
			</nav>
		</header>
	);
}
