import { Link } from "react-router-dom";

function NavLogin(props) {
	return (
		<Link
			to="/signin"
			className="bg-highlight px-4 py-1 rounded hover:bg-highlight_dark"
		>
			{props.name}
		</Link>
	);
}

export default NavLogin;
