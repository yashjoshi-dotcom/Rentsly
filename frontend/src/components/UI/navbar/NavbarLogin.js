import { Link } from "react-router-dom";

function NavLogin(props) {
	return (
		<Link
			to="/signin"
			className="bg-yellow-400 px-4 py-1 rounded hover:bg-yellow-500"
		>
			{props.name}
		</Link>
	);
}

export default NavLogin;
