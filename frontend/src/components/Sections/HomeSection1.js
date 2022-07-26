import styles from "./HomeSection.module.css";
import HomeButton from "../UI/button/HomeButton";
import HeadingSection1 from "../UI/Section1.js/SectionHeading";
import TaglLineSection1 from "../UI/Section1.js/TagLine";

function Section1() {
	return (
		<div className={`${styles.section1} + ${styles.grid_display}`}>
			<HeadingSection1 />
            <TaglLineSection1 />
			<HomeButton />
		</div>
	);
}

export default Section1;
