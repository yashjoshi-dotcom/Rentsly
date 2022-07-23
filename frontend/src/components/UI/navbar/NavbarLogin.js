import styles from "./NavbarLogin.module.css";

function NavLogin(props) {
	return (
		<li className={styles.nav_login}>
			<a href="#">{props.name}</a>
		</li>
	);
}

export default NavLogin;
