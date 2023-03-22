import styles from './VideoList.module.scss';
const { wrapper, 'wrapper-title': wrapperTitle } = styles;


const VideoList = ({ title, children }) => {
  return (
    <div className={wrapper}>
      <h2 className={wrapperTitle}>{title}</h2>
      {children || <p>No hay videos</p>}
    </div>
  );
};

export default VideoList;
