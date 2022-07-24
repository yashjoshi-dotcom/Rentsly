import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';


function NavLogin(props) {
	return (
		<li className={styles.nav_login}>
			<Link to ="/signin">{props.name}</Link>
		</li>
	);
}

export default NavLogin;
