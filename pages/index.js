import React from "react";
// -----
import dayjs from "dayjs";
import localized from "dayjs/plugin/localizedFormat";
dayjs.extend(localized);
// -----
import { PageWrapper } from "../components/PageWrapper";
import { AlertSection } from "../components/Alerts";
// -----
import axios from "axios";

const HomeScreen = () => {
	const [feed, setFeed] = React.useState();
	const [testFeed, setTestFeed] = React.useState();
	let rssFeedDisplay, testRssFeedDisplay;

	// React.useEffect(async () => {
	// 	let rssFeed = await axios.get("/api/cors/spc-rss-feed");
	// 	setFeed(rssFeed.data.items);
	// 	console.log(Object.entries(rssFeed.data.items));
	// }, []);

	React.useEffect(async () => {
		let testFeed = await axios.get(
			"https://test-www-spc.woc.noaa.gov/products/spcrss.xml"
		);
		// setTestFeed(testFeed.data.items);
		console.log(testFeed);
		// console.log(Object.entries(testFeed.data.items));
	}, []);

	// if (feed) {
	// 	rssFeedDisplay = feed.map(item => (
	// 		<div key={item.link} className='mb-4 bg-black p-4'>
	// 			{Object.entries(item).map(([key, value]) => (
	// 				<>
	// 					<span className='font-bold italic text-red-400'>{key}: </span>
	// 					<span>{value}</span>
	// 					<br />
	// 				</>
	// 			))}
	// 		</div>
	// 	));
	// } else {
	// 	rssFeedDisplay = <p>No RSS feed...</p>;
	// }

	// if (testFeed) {
	// 	testRssFeedDisplay = testFeed.map(item => (
	// 		<div key={item.link} className='mb-4 bg-black p-4'>
	// 			{Object.entries(item).map(([key, value]) => (
	// 				<>
	// 					<span className='font-bold italic text-red-400'>{key}: </span>
	// 					<span>{value}</span>
	// 					<br />
	// 				</>
	// 			))}
	// 		</div>
	// 	));
	// } else {
	// 	testRssFeedDisplay = <p>No RSS testFeed...</p>;
	// }

	return (
		<PageWrapper>
			<AlertSection />
			{/* {rssFeedDisplay} */}
			{/* {testRssFeedDisplay} */}
		</PageWrapper>
	);
};

export default HomeScreen;
