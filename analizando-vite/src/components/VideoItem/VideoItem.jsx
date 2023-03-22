import styles from './VideoItem.module.scss';
const { container, durationStyle } = styles;
const VideoItem = ({ title, description, uploadDate, duration }) => {
	let seconds = duration % 60;

	if (seconds < 10) seconds += '0';

	const minutes = Math.floor(duration / 60);

	return (
		<div className={container}>
			<h3>{title}</h3>
			<div>
				<span className={durationStyle}>
					{minutes}:{seconds}
				</span>
				<br />
				<span>{uploadDate.toLocaleDateString()}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default VideoItem;
