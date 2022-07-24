import NavbarItem from "./Navbaritem";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";

function NavbarLeft() {
	return (
		<ul className={styles.nav_left}>
			<NavLogo name={ "RENTSLY" } navAddress={ "/Home" } />
			<NavbarItem name={"About Us"} navAddress={"/About"} />
			<NavbarItem name={ "Member Stories" } navAddress={ "/Contact" } />
			<NavbarItem name={"Become a Partner"}  navAddress={"/Contact"} />
		</ul>
	);
}

export default NavbarLeft;
