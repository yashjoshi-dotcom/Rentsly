import HomeCard from "../UI/Section2/HomeCard";

function Section2(props) {
	return (
		<div
			className={`flex flex-col justify-evenly p-12 relative h-screen w-full bg-indigo-500 `}
		>
			<h1 className="text-5xl text-center">Random heading</h1>
			<p className="text-center italic">Lodwe ipsum wala paragraph </p>
			<div className="flex flex-row gap-16">
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
			</div>
		</div>
	);
}

export default Section2;
