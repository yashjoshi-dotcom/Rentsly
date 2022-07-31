import styles from "./FooterHeading.module.css"

function FooterHeading(props) {
	return <h3 className={styles.footerHeading}>{props.heading}</h3>;
}

FooterHeading.defaultProps = {
	heading: "Some Heading",
};

export default FooterHeading;
