import styles from './Logo.module.scss';

export default function Logo() {
	return (
		<div className={styles.Logo}>
			<img className="h-100" src="https://logos-world.net/wp-content/uploads/2022/07/Jedi-Logo.png"/>
		</div>
	);
}
