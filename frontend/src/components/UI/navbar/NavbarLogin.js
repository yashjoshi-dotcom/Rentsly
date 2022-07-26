import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function NavLogin(props) {
	return (
		<Link to="/signin" className={styles.nav_login}>
			{props.name}
		</Link>
	);
}

export default NavLogin;
