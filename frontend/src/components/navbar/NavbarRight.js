import NavbarItem from "./Navbaritem";
import NavLogin from "./NavbarLogin";
import styles from "./Navbar.module.css"

function NavbarRight() {
	return (
		<ul className={styles.nav_right}>
			<NavbarItem name={"Our Homes"} navAddress={ "./search" }/>
            <NavLogin name={"LogIn"} />
		</ul>
	);
}

export default NavbarRight;
