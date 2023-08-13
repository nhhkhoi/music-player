import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <MusicPlayer />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
