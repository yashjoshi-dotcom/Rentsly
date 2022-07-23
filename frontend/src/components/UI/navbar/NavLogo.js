import styles from "./Navbar.module.css";

function NavLogo(props) {
	return (
		<li className={styles.nav_logo}>
			<a href="#">{props.name}</a>
		</li>
	);
}

export default NavLogo;
