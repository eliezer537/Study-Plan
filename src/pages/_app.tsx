import '../styles/globals.scss';

import { SideBar } from '../components/SideBar';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
	return (
		<div className={styles.wrapper}>
			<SideBar />
			<main>
				<Component {...pageProps} />
			</main>
		</div>
	);
}

export default MyApp;
