import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

function Navbar() {
	return (
		<div className="flex justify-between align-center h-14 bg-section1bgcolor ">
			<NavbarLeft />
			<NavbarRight />
		</div>
	);
}

export default Navbar;
