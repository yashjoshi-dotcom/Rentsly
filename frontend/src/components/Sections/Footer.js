import styles from "./Footer.module.css";
import FooterSection from "../UI/Footer/FooterSection";
import FooterHeading from "../UI/Footer/FooterHeading";
import FooterItem from "../UI/Footer/FooterItem";

function Footer() {
	return (
		<div className={styles.footer}>
			<FooterSection>
				<FooterHeading />
				<FooterItem />
				<FooterItem />
				<FooterItem />
			</FooterSection>
			<FooterSection>
				<FooterHeading />
				<FooterItem />
				<FooterItem />
				<FooterItem />
			</FooterSection>
			<FooterSection>
				<FooterHeading />
				<FooterItem />
				<FooterItem />
				<FooterItem />
			</FooterSection>
		</div>
	);
}

export default Footer;
