import NavbarItem from "./Navbaritem";
import NavLogo from "./NavLogo";
import styles from "./NavbarLeft.module.css";

function NavbarLeft() {
	return (
		<ul className={styles.nav_left}>
			<NavLogo name={"RENTSLY"} />
			<NavbarItem name={"About Us"} />
			<NavbarItem name={"Member Stories"} />
			<NavbarItem name={"Become a Partner"} />
		</ul>
	);
}

export default NavbarLeft;
