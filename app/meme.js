import React from "react";
import memesData from "./memesData";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		url: "",
	});

	const [allMemeImages, setAllMemeImages] = React.useState([]);

	React.useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemeImages(data.data.memes));
	}, []);

	function handleChange(event) {
		const { name, value } = event.target;

		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	function handleClick() {
		let newUrl = allMemeImages[Math.floor(Math.random() * 100)].url;

		setMeme((prevMeme) => ({
			...prevMeme,
			url: newUrl,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					className="form-input"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				></input>
				<input
					type="text"
					className="form-input"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				></input>
				<button className="form-button" onClick={handleClick}>
					Meme time
				</button>
				<div className="wrapper">
					<img src={meme.url} className="form-image" name="url"></img>
					<h3 className="top-text">{meme.topText}</h3>
					<h3 className="bottom-text">{meme.bottomText}</h3>
				</div>
			</div>
		</main>
	);
}
