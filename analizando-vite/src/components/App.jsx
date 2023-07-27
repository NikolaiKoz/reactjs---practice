import styles from './App.module.scss';
import VideoItem from './VideoItem/VideoItem';
import VideoList from './VideoList/VideoList';

const { container } = styles;

const App = () => (
	<div className={container}>
		<h1>Experimentando con React y Vit</h1>
		<VideoList title='Titulo de la lista'>
			<VideoItem
				title='Titulo ejemplo'
				duration={2760}
				uploadDate={new Date(2023, 1, 15)}
				description='ejemplo description'
			/>
			<VideoItem
				title='Titulo ejemplo 2'
				duration={3360}
				uploadDate={new Date(2023, 0, 1)}
				description='ejemplo description'
			/>
		</VideoList>
		<VideoList title='Titulo de la lista 2'>
			<VideoItem
				title='Titulo ejemplo'
				duration={2760}
				uploadDate={new Date(2023, 1, 15)}
				description='ejemplo description'
			/>
			<VideoItem
				title='Titulo ejemplo 2'
				duration={3360}
				uploadDate={new Date(2023, 0, 1)}
				description='ejemplo description'
			/>
		</VideoList>
		<VideoList title='Titulo de la lista 3'>
			<VideoItem
				title='Titulo ejemplo'
				duration={2760}
				uploadDate={new Date(2023, 1, 15)}
				description='ejemplo description'
			/>
			<VideoItem
				title='Titulo ejemplo 2'
				duration={3360}
				uploadDate={new Date(2023, 0, 1)}
				description='ejemplo description'
			/>
		</VideoList>
		<VideoList />
	</div>
);

export default App;