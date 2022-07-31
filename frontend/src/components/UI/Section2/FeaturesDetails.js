import styles from "./FeaturesDetails.module.css";

function FeaturesDetails(props) {
	return (
		<div className={styles.feature_details}>
			<h1 className={styles.feature_details_heading}>Rent your homes</h1>
			<p>
				Lorem Ipsum has been the industry's standard dummy text ever since the
				1500s, when an unknown printer took a galley of type and scrambled it to
				make a type specimen book. It has survived not only five centuries
			</p>
		</div>
	);
}

export default FeaturesDetails;
