import { Link } from "react-router-dom";

function FooterItem(props) {
	return (
		<li>
			<Link className="text-white hover:text-yellow-500" to={props.link}>
				{props.name}
			</Link>
		</li>
	);
}

FooterItem.defaultProps = {
	name: "Something",
	link: "/Home",
};

export default FooterItem;
