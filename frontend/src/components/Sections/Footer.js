import styles from "./Footer.module.css";
import FooterSection from "../UI/Footer/FooterSection";
import FooterHeading from "../UI/Footer/FooterHeading";
import FooterItem from "../UI/Footer/FooterItem";

function Footer() {
	return (
		<div className={styles.footer}>
			<FooterSection extraClass={styles.extra_margin}>
				<FooterItem name="Privacy Policy" />
				<FooterItem name="Terms & Conditions" />
				<FooterItem name="About" link="/About" />
			</FooterSection>

			<FooterSection extraClass={styles.centerFooter}>
				<FooterHeading heading="Rentsly"/>
				<div className={styles.footerSvg}>SVG</div>
				<p className={styles.footerNewsletter}>Weekly Newsletter</p>
				<div className={styles.footerInputs}>
					<input type="text" placeholder="Name@Email.Com"></input>
					<span>Subscribe</span>
				</div>
				<p className={styles.footerCopyright}>2022 Copyright | Designed by Eld3r</p>
			</FooterSection>
			
			<FooterSection extraClass={styles.extra_margin}>
				<FooterItem name="Become Partner" />
				<FooterItem name="Refund Policy" />
				<FooterItem name="Contact" link="/Contact" />
			</FooterSection>
		</div>
	);
}

export default Footer;
