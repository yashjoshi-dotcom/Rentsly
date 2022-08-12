import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<div className="flex justify-between align-center h-14 bg-sky-900 ">
			<NavbarLeft />
			<NavbarRight />
		</div>
	);
}

export default Navbar;
