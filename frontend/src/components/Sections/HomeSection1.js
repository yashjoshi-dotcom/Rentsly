import styles from "./HomeSection.module.css";
import HomeButton from "../UI/button/HomeButton";

function Section1() {
	return (
		<div className={`${styles.section1} + ${styles.grid_display}`}>
			<HomeButton />
		</div>
	);
}

export default Section1;
