import ReactDOM from 'react-dom/client';
import './index.css';

const Title = props => <h3 className='title'>{props.texto}</h3>;

const app = (
	<div>
		<Title texto='Jose Luis Vallejos' />
	</div>
);

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(app);
