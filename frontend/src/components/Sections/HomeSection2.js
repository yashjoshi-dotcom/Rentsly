import HomeCard from "../UI/Section2/HomeCard";
import styles from "./HomeSection2.module.css";

function Section2(params) {
	return (
		<div className={`${styles.grid_display} + ${styles.section2}`}>
			<HomeCard designClass={styles.home_card1} />
            <HomeCard designClass={styles.home_card2} />
            <HomeCard designClass={styles.home_card3} />
            <HomeCard designClass={styles.home_card4} />
		</div>
	);
}

export default Section2;
