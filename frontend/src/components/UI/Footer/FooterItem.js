import { Link } from "react-router-dom";

function FooterItem(props) {
	return (
		<li>
			<Link className="text-textcolor1 hover:text-highlight" to={props.link}>
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
