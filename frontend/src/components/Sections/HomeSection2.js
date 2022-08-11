import HomeCard from "../UI/Section2/HomeCard";
import styles from "./HomeSection2.module.css";

function Section2(props) {
	return (
		<div className={`${styles.grid_display} + ${styles.section2}`}>
			<h1>Random heading</h1>
			<p>Lodwe ipsum wala paragraph </p>
			<div className={styles.card_holder}>
				<HomeCard designClass={styles.home_card1} />
				<HomeCard designClass={styles.home_card2} />
				<HomeCard designClass={styles.home_card3} />
				<HomeCard designClass={styles.home_card4} />
			</div>
			<p>SVG</p>
			<p>SVG</p>
		</div>
	);
}

export default Section2;
