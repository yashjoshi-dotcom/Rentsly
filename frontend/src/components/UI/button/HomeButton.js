import styles from "./HomeButton.module.css";
import { Link } from "react-router-dom";

function HomeButton() {
	return (
		<Link
			to="/Home"
			className="row-start-6 row-end-7 col-start-2 flex items-center justify-center bg-yellow-400 rounded h-3/5 hover:bg-yellow-500"
		>
			Let's get started
		</Link>
	);
}

export default HomeButton;
