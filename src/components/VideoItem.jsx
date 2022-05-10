import './VideoItem.css';
const VideoItem = ({ video, videoSelect }) => {
  return (
    <div className="videoitem" onClick={() => videoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <h1>{video.snippet.title}</h1>
    </div>
  );
};

export default VideoItem;
