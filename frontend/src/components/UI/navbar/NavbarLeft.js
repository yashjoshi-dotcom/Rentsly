import NavbarItem from "./Navbaritem";
import NavLogo from "./NavLogo";

function NavbarLeft() {
	return (
		<ul className="flex align-center justify-around items-center w-2/5 list-none">
			<NavLogo name={"RENTSLY"} navAddress={"/Home"} />
			<NavbarItem name={"About Us"} navAddress={"/About"} />
			<NavbarItem name={"Member Stories"} navAddress={"/Contact"} />
			<NavbarItem name={"Become a Partner"} navAddress={"/search"} />
		</ul>
	);
}

export default NavbarLeft;
	