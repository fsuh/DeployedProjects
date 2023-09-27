import HeroImg from "./assets/webdevloper.svg.svg";
const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						These are the list of deployed projects I have worked with, on my
						journey of learning web development. I have many other projects in
						my github but those were not deployed. This CMS will be updated as I
						development more software web projects
					</p>
				</div>
				<div className="img-container">
					<img
						src={HeroImg}
						alt="Woman and the browser"
						className="image"
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
