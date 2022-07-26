import styles from "./HomeButton.module.css";
import { Link } from "react-router-dom";

function HomeButton() {
	return (
		<Link to="/Home" className={styles.home_btn}>
			Let's get started
		</Link>
	);
}

export default HomeButton;
