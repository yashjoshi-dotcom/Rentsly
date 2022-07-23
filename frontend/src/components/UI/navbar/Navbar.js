import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import styles from './Navbar.module.css'

function Navbar() {
	return (
		<div className={styles.nav}>
			<NavbarLeft />
			<NavbarRight />
		</div>
	);
}

export default Navbar;
