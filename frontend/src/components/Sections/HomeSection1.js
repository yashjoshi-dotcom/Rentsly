import HomeButton from "../UI/button/HomeButton";
import HeadingSection1 from "../UI/Section1/SectionHeading";
import TaglLineSection1 from "../UI/Section1/TagLine";

function Section1() {
	return (
		<div className="grid grid-cols-10 grid-rows-6 w-full h-[70vh] bg-sky-900">
			<HeadingSection1 />
			<TaglLineSection1 />
			<HomeButton />
			<div className="row-span-full col-start-4 col-end-11 bg-hut_img bg-cover"></div>
		</div>
	);
}

export default Section1;
