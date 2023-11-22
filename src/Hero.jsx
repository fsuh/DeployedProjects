import HeroImg from "./assets/webdevloper.svg.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>
						Fuh Suh's <span>Projects</span>
					</h1>
					<p>
						These are a list of deployed projects I have worked on, on my
						journey of learning web development. I have many other projects in
						my github but those are yet to be fine-tuned and deployed. This CMS
						will be updated as I develope more software web projects
					</p>
					<div className="hero-icons">
						<a
							href="https://github.com/fsuh"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i>
								<FaGithubSquare className="git-Icon" />
							</i>
						</a>
						<a
							href="https://www.linkedin.com/in/fuhsuh"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i>
								<FaLinkedin className="linkedIn-Icon" />
							</i>
						</a>
					</div>
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
