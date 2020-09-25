import { useEffect, useState } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => useInitialState(data));
  }, []);
  return videos;
};

export default useInitialState;
