import HeroImg from "./assets/webdevloper.svg.svg";
const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>
						Fuh Suh's <span>Projects</span>
					</h1>
					<p>
						These are a list of deployed projects I have worked with, on my
						journey of learning web development. I have many other projects in
						my github but those yet to be fine-tuned and deployed. This CMS will
						be updated as I develope more software web projects
					</p>
				</div>
				<div className="img-container">
					<img
						src={HeroImg}
						alt="Woman and the browser"
						className="img"
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
