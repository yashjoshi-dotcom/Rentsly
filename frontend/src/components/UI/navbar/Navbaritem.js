import { Link } from "react-router-dom";

function NavbarItem(props) {
	const finalNavAddress = `${props.navAddress}`;
	return (
		<li className="overflow-hidden py-1">
			<Link
				to={finalNavAddress}
				className="relative text-white after:absolute after:top-[102%] after:bg-yellow-400 after:w-full after:h-[2px] after:left-full hover:after:left-0 after:transition-[left_right] after:ease-in-out after:duration-150"
			>
				{props.name}
			</Link>
		</li>
	);
}

// before:absolute before:bg-yellow-400 before:w-full before:h-[1.5px] before:left-full hover:before:left-0 before:transition-[left] before:ease-in-out before:duration-100 /

export default NavbarItem;
