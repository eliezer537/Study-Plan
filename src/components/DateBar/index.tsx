import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import styles from './styles.module.scss';

type DaysProps = {
	sunday: string;
	monday: string;
	tuesday: string;
	wednesday: string;
	thursday: string;
	friday: string;
	saturday: string;
};

export function DateBar() {
	const [days, setDays] = useState({} as DaysProps);
	const [activeDay, setActiveDay] = useState(10);

	const dayOfWeek = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	].reverse();

	const date = new Date();
	useEffect(() => {
		const formattedObject = dayOfWeek.reduce((acc, current, index) => {
			const dateCalculation = `${date.getFullYear()}, ${date.getMonth()}, ${
				date.getDate() + (6 - date.getDay()) - index
			}`;

			const formatDate = format(new Date(dateCalculation), 'dd MMM yy', {
				locale: ptBR,
			});

			acc[current] = formatDate;

			return acc;
		}, {} as DaysProps);

		setDays(formattedObject);
		setActiveDay(date.getDay());
	}, []);

	return (
		<header className={styles.headerContainer}>
			<nav>
				<Link href='/'>
					<a
						className={activeDay === 0 ? styles.isToday : ''}
						onClick={() => setActiveDay(0)}
					>
						<span>{days.sunday}</span>
						<strong>Domingo</strong>
					</a>
				</Link>

				<Link href='/'>
					<a
						className={activeDay === 1 ? styles.isToday : ''}
						onClick={() => setActiveDay(1)}
					>
						<span>{days.monday}</span>
						<strong>Segunda-feira</strong>
					</a>
				</Link>

				<Link href='/'>
					<a
						className={activeDay === 2 ? styles.isToday : ''}
						onClick={() => setActiveDay(2)}
					>
						<span>{days.tuesday}</span>
						<strong>Terça-feira</strong>
					</a>
				</Link>

				<Link href='/'>
					<a
						className={activeDay === 3 ? styles.isToday : ''}
						onClick={() => setActiveDay(3)}
					>
						<span>{days.wednesday}</span>
						<strong>Quarta-feira</strong>
					</a>
				</Link>

				<Link href='/'>
					<a
						className={activeDay === 4 ? styles.isToday : ''}
						onClick={() => setActiveDay(4)}
					>
						<span>{days.thursday}</span>
						<strong>Quinta-feira</strong>
					</a>
				</Link>

				<Link href='/'>
					<a
						className={activeDay === 5 ? styles.isToday : ''}
						onClick={() => setActiveDay(5)}
					>
						<span>{days.friday}</span>
						<strong>Sexta-feira</strong>
					</a>
				</Link>

				<Link href='/'>
					<a
						className={activeDay === 6 ? styles.isToday : ''}
						onClick={() => setActiveDay(6)}	
					>
						<span>{days.saturday}</span>
						<strong>Sábado</strong>
					</a>
				</Link>
			</nav>
		</header>
	);
}
