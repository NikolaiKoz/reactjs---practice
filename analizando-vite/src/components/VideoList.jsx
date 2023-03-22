const VideoList = ({ title, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			{children || <p>No hay videos</p>}
		</div>
	);
};

export default VideoList;
