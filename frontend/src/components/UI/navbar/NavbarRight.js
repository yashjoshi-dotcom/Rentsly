import NavbarItem from "./Navbaritem";
import NavLogin from "./NavbarLogin";
import styles from "./NavbarRight.module.css"

function NavbarRight() {
	return (
		<ul className={styles.nav_right}>
			<NavbarItem name={"Our Homes"} />
            <NavLogin name={"LogIn"} />
		</ul>
	);
}

export default NavbarRight;
