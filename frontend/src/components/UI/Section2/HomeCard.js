function HomeCard(props) {
	return (
		<div
			className="relative h-96 w-full flex flex-col bg-slate-800 rounded-lg p-8 overflow-hidden z-10 /
						after:absolute after:w-[200%] after:h-1/2 after:z-10 after:top-[-10%] after:left-[-10%] after:rotate-[10deg] after:bg-amber-400 /
						hover:after:scale-[1.4] hover:after:rotate-[-20deg] hover:after:translate-y-[-20%] hover:after:rounded-[50%] hover:after:opacity-50 after:transition-all /
						before:absolute before:w-[200%] before:h-1/2 before:z-10 before:top-[-10%] before:left-[-10%] before:rotate-[10deg] before:bg-amber-400 /
						hover:before:scale-[1.2] hover:before:rotate-[-20deg] hover:before:translate-y-[-20%] hover:before:translate-x-[-20%] hover:before:rounded-[50%] before:transition-all
						"
		>
			<h2 className="z-20 w-full h-2/5 text-2xl font-semibold text-white">
				{props.heading}
			</h2>
			<p className="z-20">{props.details}</p>
		</div>
	);
}

HomeCard.defaultProps = {
	heading: "Lorem Heading",
	details: "Loda ipsum ki details as always",
};

export default HomeCard;
