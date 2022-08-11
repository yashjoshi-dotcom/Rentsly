import styles from "./FooterHeading.module.css"

function FooterHeading(props) {
	return <h2 className={styles.footerHeading}>{props.heading}</h2>;
}

FooterHeading.defaultProps = {
	heading: "Some Heading",
};

export default FooterHeading;
