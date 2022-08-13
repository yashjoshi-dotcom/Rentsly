import styles from "./FooterSection.module.css";

function FooterSection(props) {
	return (
		<ul
			className={`flex flex-col justify-around gap-4 w-1/3 text-center + 
			${props.extraClass ? props.extraClass : ""}`}
		>
			{props.children}
		</ul>
	);
}

export default FooterSection;
