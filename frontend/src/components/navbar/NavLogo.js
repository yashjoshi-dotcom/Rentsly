import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';


function NavLogo(props) {
	return (
		<li className={styles.nav_logo}>
			<Link to ="/search">{props.name}</Link>
		</li>
	);
}

export default NavLogo;
