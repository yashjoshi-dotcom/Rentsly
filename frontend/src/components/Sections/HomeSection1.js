import styles from "./HomeSection1.module.css";
import HomeButton from "../UI/button/HomeButton";
import HeadingSection1 from "../UI/Section1/SectionHeading";
import TaglLineSection1 from "../UI/Section1/TagLine";

function Section1() {
	return (
		<div className={`${styles.section1} + ${styles.grid_display}`}>
			<HeadingSection1 />
			<TaglLineSection1 />
			<HomeButton />
			<div className={styles.section1_img}>
			</div>
		</div>
	);
}

export default Section1;
