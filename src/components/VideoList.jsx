import VideoItem from './VideoItem';
const VideoList = ({ videos, videoSelect }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        videoSelect={videoSelect}
      />
    );
  });
  return <div style={{ flex: '1' }}>{renderList}</div>;
};

export default VideoList;
