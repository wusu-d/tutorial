// import { Component } from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';
// import ImageList from './ImageList';

// import GuestList from './hooks/Guestlist';

// class App extends Component {
//   state = { images: [] };

//   onTermSubmit = async (term) => {
//     const response = await axios.get('https://api.unsplash.com/search/photos', {
//       headers: {
//         Authorization: 'Client-ID ArcKk6i_US5dUEbyuSyrY845wgMg18n5TlEfI8UEoxI',
//       },
//       params: {
//         query: term,
//       },
//       timeout: 10000,
//     });
//     this.setState({ images: response.data.results });
//     console.log(response.data.results);
//   };

//   render() {
//     return (
//       <div>
//         <SearchBar onTermSubmit={this.onTermSubmit} />
//         <ImageList images={this.state.images} />
//       </div>
//     );
//   }
// }
// import React, { useState } from 'react';

// function App() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// const AIzaSyDaBL-L1-dCHMqbi-Fn_Bx2jdip_tIBgmU

import Searchbar from './components/Searchbar';
import { useState } from 'react';
import axios from 'axios';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //asynchronous function to make a request to youtube
  const onFormSubmit = async (term) => {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          q: term,
          maxResults: 5,
          key: 'AIzaSyDaBL-L1-dCHMqbi-Fn_Bx2jdip_tIBgmU',
          part: 'snippet',
        },
      }
    );
    console.log(response.data.items);
    //set our videos state
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const videoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div>
      <Searchbar onFormSubmit={onFormSubmit} />
      <div style={{ display: 'flex' }}>
        <VideoList videoSelect={videoSelect} videos={videos} />
        <VideoDetail video={selectedVideo} />
      </div>
    </div>
  );
};

export default App;
