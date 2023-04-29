import HeroImage from "./assets/images/images/image-web-3-desktop.jpg";
import HeroMobImage from "./assets/images/images/image-web-3-mobile.jpg";
import HamMenuIcon from "./assets/images/images/icon-menu.svg";
import HamMenuClose from "./assets/images/images/icon-menu-close.svg";
import Logo from "./assets/images/images/logo.svg";
import RetroPcs from "./assets/images/images/image-retro-pcs.jpg";
import laptops from "./assets/images/images/image-top-laptops.jpg";
import Gaming from "./assets/images/images/image-gaming-growth.jpg";
import React, { useState } from "react";

function App() {
	return (
		<div className="flex flex-col items-stretch min-h-screen">
			<Header />
			<HeroSection />
			<GridSection />
		</div>
	);
}

function Header() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const menuItem = [
		{ name: "Home" },
		{ name: "New" },
		{ name: "Popular" },
		{ name: "Trending" },
		{ name: "Categories" },
	];
	return (
		<div className="w-fixed mx-auto container">
			<nav className="flex items-center justify-between px-10 py-8">
				<div className="mr-6">
					<span className="text-2xl font-bold">
						<img src={Logo} />
					</span>
				</div>
				<div className="hidden md:block">
					<ul className="flex flex-row space-x-6 text-gray-400">
						{menuItem.map((el, id) => (
							<li className="cursor-pointer hover:text-red-600" key={id}>
								<span>{el.name}</span>
							</li>
						))}
					</ul>
				</div>
				{!toggleMenu && (
					<div className="md:hidden">
						<span>
							<img
								src={HamMenuIcon}
								className="cursor-pointer"
								onClick={() => {
									setToggleMenu(!toggleMenu);
								}}
							/>
						</span>
					</div>
				)}

				{toggleMenu && (
					<div className="w-54 fixed right-0 top-0 h-screen bg-white p-10 shadow-md z-90 md:hidden">
						<div className="md:hidden ">
							<span>
								<img
									src={HamMenuClose}
									className="cursor-pointer float-right right-0"
									onClick={() => {
										setToggleMenu(!toggleMenu);
									}}
								/>
							</span>
						</div>

						<div style={{ marginTop: "10rem" }}>
							<ul className="flex flex-col py-6 mt-8 space-y-8">
								{menuItem.map((el, id) => (
									<li
										className="leading-8 cursor-pointer  text-4xl text-black hover:text-red-600"
										key={id}
									>
										<span>{el.name}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
}

function HeroSection() {
	const heroSectionData = [
		{
			title: "Hydrogen VS Electric Cars",
			desc: "Will Hydrogen fuel cars even catch up to Evs ?",
		},
		{
			title: "Hydrogen VS Electric Cars",
			desc: "Will Hydrogen fuel cars even catch up to Evs ?",
		},
		{
			title: "Hydrogen VS Electric Cars",
			desc: "Will Hydrogen fuel cars even catch up to Evs ?",
		},
	];
	return (
		<div className="container mx-auto px-10 mb-10">
			<div className="flex flex-col   md:flex-row md:space-x-4">
				<div className="w-full md:w-3/4">
					<div className="flex flex-col">
						<img
							src={HeroImage}
							className="hidden rounded-none object-cover md:block"
						></img>
						<img
							src={HeroMobImage}
							className="rounded-none object-cover md:hidden"
						></img>

						<div className="flex flex-col    mt-4 py-4 md:flex-row md:py-10 md:mt-7 md:space-x-10">
							<h2 className="w-full text-6xl  font-bold text-left md:w-2/4   ">
								The Bright
								<br /> Future of <br /> Web 3-0?
							</h2>
							<div className="mt-2 md:px-4">
								<p className="leading-7 text-gray-400 text-md mb-8 md:leading-8">
									We dive into the next evolution of the web that
									<br /> claims to put the power of the platforms back
									<br /> into the hands of the people.But is it really,
									<br /> fulfilling its need ?
								</p>
								<a
									href="#"
									className="rounded-none text-left font-light bg-red-600 text-white px-5 py-3 outline-0 hover:bg-gray-400"
								>
									READ MORE
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full bg-black  md:w-1/4">
					<div className="p-8">
						<h2 className="text-bold text-2xl text-yellow-700 text-left mb-4 p-6">
							New
						</h2>{" "}
						<div className="flex flex-col space-y-8">
							{heroSectionData.map((el, id) => (
								<React.Fragment key={id}>
									<div className="mb-4">
										<h3 className="text-bold text-xl text-white baseline cursor-pointer mb-2 hover:text-yellow-700">
											{el.title}
										</h3>
										<span className="text-md text-gray-400">{el.desc}</span>
									</div>
									{heroSectionData.length - 1 !== id && <hr />}
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
function GridSection() {
	const gridSectionData = [
		{
			name: "01",
			img: RetroPcs,
			title: "Reviving Retro Pcs",
			desc: "What happens when old Pcs, are given modern upgrade?",
		},
		{
			name: "02",
			img: laptops,
			title: "Top 10 laptops of 2023",
			desc: "	Our best picks for various, needs and budgets.",
		},
		{
			name: "03",
			img: Gaming,
			title: "The Growth of Gaming",
			desc: "How the pandemic has sparked , fresh opportunities.",
		},
	];
	return (
		<div className="container mx-auto px-10 py-2 mt-4 mb-4">
			<div className="flex flex-col   md:flex-row md:justify-between">
				{gridSectionData.map((el, id) => (
					<div className="flex space-x-3 mb-3  md:space-x-4" key={id}>
						<div>
							<img src={el.img} />
						</div>
						<div className="flex flex-col space-y-2 text-left md:space-y-6">
							<h2 className="font-bold text-4xl text-gray-500">{el.name}</h2>
							<h4 className="text-md  font-bold md:text-xl cursor-pointer hover:text-red-600">
								{el.title}
							</h4>
							<p className="leading-6 text-gray-400 font-thin">
								{el.desc.split(",")[0]}
								<br />
								{el.desc.split(",")[1]}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default App;

