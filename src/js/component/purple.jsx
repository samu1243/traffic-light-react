import React from "react";
import { useState } from "react";

export const Purple = () => {
	const [color, setColor] = useState("");
	const classPurple = color === "purple" ? "purple selected" : "purple";

	return (
		<div>
			<div
				className={classPurple}
				onClick={() => {
					color === "purple" ? setColor("") : setColor("purple");
				}}></div>
			<div>
				<button onClick={Purple}>Create purple light</button>
			</div>
		</div>
	);
};
