import FooterSection from "../UI/Footer/FooterSection";
import FooterHeading from "../UI/Footer/FooterHeading";
import FooterItem from "../UI/Footer/FooterItem";
import Instagram from "../../SVG/Instagram";
import Facebook from "../../SVG/Facebook";
import Twitter from "../../SVG/Twitter";

function Footer() {
	return (
		<div className="h-full w-full bg-footerbgcolor flex flex-row items-center justify-evenly">
			<FooterSection extraClass="mt-12">
				<FooterItem name="Privacy Policy" />
				<FooterItem name="Terms & Conditions" />
				<FooterItem name="About" link="/About" />
			</FooterSection>

			<FooterSection extraClass="flex flex-col justify-between before:invisible">
				<FooterHeading heading="Rentsly" />

				<div className="flex flex-row justify-evenly items-center">
					<Instagram size="50" color="fill-highlight hover:fill-highlight_dark" />
					<Facebook size="50" color="fill-highlight hover:fill-highlight_dark" />
					<Twitter size="50" color="fill-highlight hover:fill-highlight_dark" />
				</div>

				<p className="text-textcolor1 text-l mb-0">Weekly Newsletter</p>
				<div className="h-10 flex flex-row w-full items-center">
					<input
						className="w-2/3 h-full bg-input_bg p-4 border-2 border-highlight border-r-0 rounded rounded-br-none rounded-tr-none"
						type="text"
						placeholder="Name@Email.Com"
					></input>
					<span className="flex items-center justify-center w-1/3 h-full bg-highlight border-2 border-highlight rounded rounded-bl-none rounded-tl-none hover:bg-highlight_dark hover:border-highlight_dark">
						Subscribe
					</span>
				</div>
				<p className="text-textcolor1 text-l">2022 Copyright | Designed by Eld3r</p>
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