import { useState } from "react";
import React from "react";
import "./App.css";
import { getCardPosition } from "@/utils/card";
import deck from "@assets/deck.jpg";
import { CARD_HEIGHT, CARD_WIDTH } from "@constants/card";

function App() {
	const [count, setCount] = useState(1);

	const position = getCardPosition({
		suit: "CUP",
		rank: `${count}`,
	});

	const cardStyle = {
		backgroundImage: `url(${deck})`,
		width: CARD_WIDTH,
		height: CARD_HEIGHT,
		backgroundRepeat: "no-repeat",
		display: "inline-block",
		backgroundSize: "auto",
		backgroundPosition: `-${position}px 0`,
		borderRadius: "6px",
	};

	return (
		<div className="card">
			<button type="button" onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
			<div style={cardStyle} />
		</div>
	);
}

export default App;
