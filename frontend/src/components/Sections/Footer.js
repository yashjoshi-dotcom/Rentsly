import styles from "./Footer.module.css";
import FooterSection from "../UI/Footer/FooterSection";
import FooterHeading from "../UI/Footer/FooterHeading";
import FooterItem from "../UI/Footer/FooterItem";
import Instagram from "../../SVG/Instagram";
import Facebook from "../../SVG/Facebook";
import Twitter from "../../SVG/Twitter";

function Footer() {
	return (
		<div className="h-full w-full bg-sky-900 flex flex-row items-center justify-evenly">
			<FooterSection extraClass="mt-12">
				<FooterItem name="Privacy Policy" />
				<FooterItem name="Terms & Conditions" />
				<FooterItem name="About" link="/About" />
			</FooterSection>

			<FooterSection extraClass="flex flex-col justify-between before:invisible">
				<FooterHeading heading="Rentsly" />

				<div className="flex flex-row justify-evenly items-center">
					<Instagram size="50" color="fill-sky-300 hover:fill-sky-600" />
					<Facebook size="50" color="fill-sky-300 hover:fill-sky-600" />
					<Twitter size="50" color="fill-sky-300 hover:fill-sky-600" />
				</div>

				<p className="text-white text-l mb-0">Weekly Newsletter</p>
				<div className="h-10 flex flex-row w-full items-center">
					<input
						className="w-2/3 h-full bg-sky-100 p-4 border-2 border-sky-400 border-r-0 rounded rounded-br-none rounded-tr-none"
						type="text"
						placeholder="Name@Email.Com"
					></input>
					<span className="flex items-center justify-center w-1/3 h-full bg-sky-100 border-2 border-sky-400 rounded rounded-bl-none rounded-tl-none hover:bg-sky-500">
						Subscribe
					</span>
				</div>
				<p className="text-white text-l">2022 Copyright | Designed by Eld3r</p>
			</FooterSection>

			<FooterSection extraClass="mt-12">
				<FooterItem name="Become Partner" />
				<FooterItem name="Refund Policy" />
				<FooterItem name="Contact" link="/Contact" />
			</FooterSection>
		</div>
	);
}

export default Footer;
