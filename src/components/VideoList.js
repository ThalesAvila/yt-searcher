import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
	const renderedList = videos.map((video, key) => {
		return <VideoItem key={key} video={video} />;
	});

	return <div>{renderedList}</div>;
};

export default VideoList;
