import NavbarItem from "./Navbaritem";
import NavLogin from "./NavbarLogin";
import styles from "./Navbar.module.css"

function NavbarRight() {
	return (
		<ul className="flex items-center justify-evenly w-1/3">
			<NavbarItem name={"Our Homes"} navAddress={ "../../Home" }/>
            <NavLogin name={"LogIn"} />
		</ul>
	);
}

export default NavbarRight;
