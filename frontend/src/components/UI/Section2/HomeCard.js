import styles from "./HomeCard.module.css";

function HomeCard(props) {
	return (
		<div className={styles.home_card}>
			<h2>{props.heading}</h2>
			<p	>{props.details}</p>
		</div>
	);
}

HomeCard.defaultProps = {
	heading: "Lorem Heading",
	details: "Loda ipsum ki details as always",
};

export default HomeCard;
