import styles from "./FooterSection.module.css";

function FooterSection(props) {
	return (
		<ul
			className={`${styles.footerSection} + ${
				props.extraClass ? props.extraClass : ""
			}`}
		>
			{props.children}
		</ul>
	);
}

export default FooterSection;
