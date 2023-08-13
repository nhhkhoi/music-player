import React, { useState } from "react";
import Track1 from "../track1.mp3";
import Track2 from "../track2.mp3";
import Track3 from "../track3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Futuristic",
      author: "Royalty Free Music",
      file: Track1,
      img: "https://images.pexels.com/photos/354941/pexels-photo-354941.jpeg",
      alt: "Shanghai Financial Tower, China",
    },
    {
      name: "Risk",
      author: "Studio Kolomma",
      file: Track2,
      img: "https://images.pexels.com/photos/3887281/pexels-photo-3887281.jpeg",
      alt: "Man In Black Tank Top Hanging On A Rope",
    },
    {
      name: "Winning Elevation",
      author: "Hot_Music",
      file: Track3,
      img: "https://images.pexels.com/photos/6565252/pexels-photo-6565252.jpeg",
      alt: "Close-up Photo of a Hockey Trophy",
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
