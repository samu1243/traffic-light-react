import { func } from "prop-types";
import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	const classGreen = color === "green" ? "green selected" : "green";
	const classYellow = color === "yellow" ? "yellow selected" : "yellow";
	const classRed = color === "red" ? "red selected" : "red";
	// const classPurple = color === "purple" ? "purple selected" : "purple";
	func;

	return (
		<>
			<div className="pole"></div>
			<div className="trafficStop">
				<div
					className={classGreen}
					onClick={() => {
						color === "green" ? setColor("") : setColor("green");
					}}></div>
				<div
					className={classYellow}
					onClick={() => {
						color === "yellow" ? setColor("") : setColor("yellow");
					}}></div>
				<div
					className={classRed}
					onClick={() => {
						color === "red" ? setColor("") : setColor("red");
					}}></div>
			</div>
		</>
	);
};

export default Home;
