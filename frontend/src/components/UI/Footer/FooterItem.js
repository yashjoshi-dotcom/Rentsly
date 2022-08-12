import styles from "./FooterItem.module.css";
import { Link } from "react-router-dom";

function FooterItem(props) {
	return (
		<li>
			<Link className={styles.footerItem} to={props.link}>
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
