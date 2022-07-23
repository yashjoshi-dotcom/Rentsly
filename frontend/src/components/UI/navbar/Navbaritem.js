import styles from "./Navbaritem.module.css";

function NavbarItem(props) {
	return (
		<li className={styles.nav_links}>
			<a className={styles.nav_link} href="#">
				{props.name}
			</a>
		</li>
	);
}

export default NavbarItem;
