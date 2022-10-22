import { Link } from "react-router-dom";

function HomeButton() {
	return (
		<Link
			to="/Home"
			className="row-start-6 row-end-7 col-start-2 flex items-center justify-center bg-highlight rounded h-3/5 hover:bg-highlight_dark"
		>
			Let's get started
		</Link>
	);
}

export default HomeButton;
